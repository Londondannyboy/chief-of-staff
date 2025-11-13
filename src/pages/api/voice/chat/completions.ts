import type { APIRoute } from 'astro';
import { ZepClient } from '@getzep/zep-cloud';

const ZEP_API_KEY = import.meta.env.ZEP_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || import.meta.env.ANTHROPIC_API_KEY;

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

    // Get relevant context from Zep
    let zepContext = '';
    try {
      const memory = await zep.memory.get(sessionId);
      if (memory?.context) {
        zepContext = `\n\n[Relevant Context from Knowledge Graph]:\n${memory.context}`;
        console.log('[Voice LLM] Retrieved Zep context');
      }
    } catch (contextError: any) {
      console.error('[Voice LLM] Context retrieval error:', contextError.message);
    }

    // Get the user's last message
    const userMessage = messages[messages.length - 1];
    const conversationHistory = messages.slice(0, -1);

    // Build enhanced prompt with Zep context
    const systemPrompt = `You are a highly capable Chief of Staff Assistant with emotional intelligence. You help with:
- Strategic planning and decision-making
- Meeting coordination and follow-ups
- Information synthesis and insights
- Task prioritization and management
- Research and analysis

You speak naturally and conversationally. Be concise but helpful. Show empathy and understanding.${zepContext}`;

    // Call Anthropic Claude for response
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [
          ...conversationHistory.map((msg: any) => ({
            role: msg.role === 'assistant' ? 'assistant' : 'user',
            content: msg.content,
          })),
          {
            role: 'user',
            content: userMessage.content,
          },
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('[Voice LLM] Anthropic error:', error);
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.content[0].text;

    console.log('[Voice LLM] Generated response');

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
