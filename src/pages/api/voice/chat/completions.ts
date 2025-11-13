import type { APIRoute } from 'astro';
import { ZepClient } from '@getzep/zep-cloud';

const ZEP_API_KEY = import.meta.env.ZEP_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;

export const POST: APIRoute = async ({ request }) => {
  console.log('[Voice LLM] Request received');

  try {
    const body = await request.json();
    const { messages, user_id } = body;

    console.log('[Voice LLM] Messages:', messages?.length, 'User ID:', user_id);

    if (!messages || messages.length === 0) {
      throw new Error('No messages provided');
    }

    // Initialize Zep client
    const zep = new ZepClient({
      apiKey: ZEP_API_KEY,
    });

    // Create session ID from user_id (Hume provides this)
    const sessionId = user_id || `session-${Date.now()}`;
    console.log('[Voice LLM] Session ID:', sessionId);

    // Add messages to Zep memory
    try {
      await zep.memory.add(sessionId, {
        messages: messages.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
          roleType: msg.role === 'user' ? 'user' : 'assistant',
        })),
      });
      console.log('[Voice LLM] Added messages to Zep memory');
    } catch (zepError: any) {
      console.error('[Voice LLM] Zep error:', zepError.message);
      // Continue even if Zep fails - don't block the conversation
    }

    // Search Zep for relevant context
    let zepContext = '';
    let hasContext = false;

    const userMessage = messages[messages.length - 1];

    try {
      // Search Zep for relevant facts about the query
      const searchResults = await zep.memory.search(sessionId, {
        text: userMessage.content,
        searchScope: 'summary', // Search summaries and facts
        searchType: 'similarity',
      });

      if (searchResults && searchResults.length > 0) {
        zepContext = searchResults
          .map((result: any) => result.message?.content || result.summary)
          .filter(Boolean)
          .join('\n\n');

        hasContext = zepContext.trim().length > 0;
        console.log('[Voice LLM] Found Zep context:', hasContext);
      }
    } catch (searchError: any) {
      console.error('[Voice LLM] Zep search error:', searchError.message);
    }

    // If no context found in Zep, return polite refusal
    if (!hasContext) {
      console.log('[Voice LLM] No context - returning refusal');
      const assistantMessage = "I don't have information about that in my knowledge base yet. Could you tell me more about it? I'll remember it for next time.";

      // Store this exchange in Zep
      try {
        await zep.memory.add(sessionId, {
          messages: [{
            role: 'assistant',
            content: assistantMessage,
            roleType: 'assistant',
          }],
        });
      } catch (e) {
        console.error('[Voice LLM] Failed to store refusal:', e);
      }

      return new Response(
        JSON.stringify({
          id: `chatcmpl-${Date.now()}`,
          object: 'chat.completion',
          created: Math.floor(Date.now() / 1000),
          model: 'zep-knowledge-base',
          choices: [
            {
              index: 0,
              message: {
                role: 'assistant',
                content: assistantMessage,
              },
              finish_reason: 'stop',
            },
          ],
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const conversationHistory = messages.slice(0, -1);

    // Build strict RAG prompt - ONLY use Zep context
    const systemPrompt = `You are a knowledge-based Chief of Staff Assistant.

CRITICAL RULES:
1. You can ONLY answer based on the information provided in the Context below
2. If the Context doesn't contain information to answer the question, you MUST say: "I don't have information about that in my knowledge base yet. Could you tell me more?"
3. DO NOT use your general knowledge or training data
4. DO NOT make assumptions beyond what's in the Context
5. Speak naturally and conversationally, but ONLY from the Context

CONTEXT FROM KNOWLEDGE BASE:
${zepContext}

Answer the user's question using ONLY the information above. Be helpful and concise.`;

    // Build conversation for Gemini
    const geminiMessages = [
      ...conversationHistory.slice(-6).map((msg: any) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      })),
      {
        role: 'user',
        parts: [{ text: userMessage.content }],
      },
    ];

    // Call Google Gemini for response
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }],
          },
          contents: geminiMessages,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
            topP: 0.95,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('[Voice LLM] Gemini error:', error);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't generate a response. Please try again.";

    console.log('[Voice LLM] Generated response from Zep context using Gemini');

    // Return in OpenAI-compatible format for Hume
    return new Response(
      JSON.stringify({
        id: `chatcmpl-${Date.now()}`,
        object: 'chat.completion',
        created: Math.floor(Date.now() / 1000),
        model: 'claude-3-5-sonnet-20241022',
        choices: [
          {
            index: 0,
            message: {
              role: 'assistant',
              content: assistantMessage,
            },
            finish_reason: 'stop',
          },
        ],
        usage: {
          prompt_tokens: 0,
          completion_tokens: 0,
          total_tokens: 0,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('[Voice LLM] Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';

    return new Response(
      JSON.stringify({
        error: {
          message: errorMessage,
          type: 'internal_error',
        },
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
