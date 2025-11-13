import { C1Chat } from '@thesysai/genui-sdk';
import { ThemeProvider } from '@crayonai/react-ui';

interface C1DashboardProps {
  apiUrl?: string;
  agentName?: string;
  logoUrl?: string;
}

export default function C1Dashboard({
  apiUrl = '/api/c1',
  agentName = 'Chief of Staff Assistant',
  logoUrl
}: C1DashboardProps) {

  const processMessage = async ({
    threadId,
    messages,
    responseId,
    abortController
  }: {
    threadId: string;
    messages: { id: string; role: 'user' | 'assistant'; content: string }[];
    responseId: string;
    abortController: AbortController;
  }) => {
    console.log('processMessage called', { threadId, messagesCount: messages.length });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.map(m => ({
            role: m.role,
            content: m.content,
          })),
          threadId,
          responseId,
        }),
        signal: abortController.signal,
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error:', response.status, errorText);
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }

      return response;
    } catch (error) {
      console.error('processMessage error:', error);
      throw error;
    }
  };

  return (
    <ThemeProvider mode="system">
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <C1Chat
          processMessage={processMessage}
          formFactor="full-page"
          agentName={agentName}
          logoUrl={logoUrl}
          scrollVariant="always"
        />
      </div>
    </ThemeProvider>
  );
}
