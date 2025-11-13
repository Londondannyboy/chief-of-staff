import { VoiceProvider } from '@humeai/voice-react';
import { useState, useEffect } from 'react';
import VoiceInterface from './VoiceInterface';

export default function HumeVoice() {
  const [accessToken, setAccessToken] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch('/api/hume/token');
        const data = await response.json();

        if (data.accessToken) {
          setAccessToken(data.accessToken);
        } else {
          setError('Failed to get access token');
        }
      } catch (err) {
        console.error('Error fetching token:', err);
        setError('Failed to connect to voice service');
      } finally {
        setLoading(false);
      }
    }

    fetchToken();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#000',
        color: '#fff',
        fontSize: '24px'
      }}>
        Connecting to voice assistant...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#000',
        color: '#ff4444',
        fontSize: '24px',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div>⚠️ {error}</div>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: '12px 32px',
            background: '#667eea',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <VoiceProvider
      auth={{ type: 'accessToken', value: accessToken }}
      configId={import.meta.env.PUBLIC_HUME_CONFIG_ID || '54f86c53-cfc0-4adc-9af0-0c4b907cadc5'}
    >
      <VoiceInterface />
    </VoiceProvider>
  );
}
