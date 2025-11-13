import { useVoice } from '@humeai/voice-react';

export default function VoiceInterface() {
  const { connect, disconnect, status, messages } = useVoice();

  const isConnected = status.value === 'connected';

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
        padding: '40px'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '900',
          marginBottom: '20px',
          textShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}>
          🎤 Chief of Staff Assistant
        </h1>

        <p style={{
          fontSize: '20px',
          marginBottom: '40px',
          opacity: 0.9
        }}>
          {isConnected
            ? 'Voice assistant is listening... Speak naturally!'
            : 'Click below to start your voice conversation'}
        </p>

        <button
          onClick={isConnected ? disconnect : connect}
          style={{
            padding: '20px 60px',
            fontSize: '20px',
            fontWeight: '700',
            background: isConnected ? '#dc2626' : '#fff',
            color: isConnected ? '#fff' : '#667eea',
            border: 'none',
            borderRadius: '100px',
            cursor: 'pointer',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isConnected ? '🔴 End Conversation' : '▶️ Start Talking'}
        </button>

        {isConnected && (
          <div style={{
            marginTop: '40px',
            padding: '20px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            maxHeight: '300px',
            overflowY: 'auto'
          }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Conversation</h3>
            {messages.length === 0 ? (
              <p style={{ opacity: 0.7 }}>Start speaking to see the conversation...</p>
            ) : (
              <div style={{ textAlign: 'left' }}>
                {messages.slice(-5).map((msg: any, idx: number) => (
                  <div
                    key={idx}
                    style={{
                      marginBottom: '12px',
                      padding: '12px',
                      background: msg.role === 'user'
                        ? 'rgba(255,255,255,0.2)'
                        : 'rgba(0,0,0,0.2)',
                      borderRadius: '8px'
                    }}
                  >
                    <strong style={{ textTransform: 'capitalize' }}>{msg.role}:</strong> {msg.message?.content || '...'}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div style={{
          marginTop: '40px',
          fontSize: '14px',
          opacity: 0.7
        }}>
          Powered by Hume.ai EVI with emotional intelligence
        </div>
      </div>
    </div>
  );
}
