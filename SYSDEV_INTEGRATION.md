# Sys.dev Generative UX Integration

This document describes the sys.dev (Thesys C1) integration for Chief of Staff Quest.

## Overview

We've integrated [sys.dev](https://thesys.dev)'s generative UX experience using their GenUI SDK. This provides an AI-powered conversational interface for users after they log in.

## Implementation Details

### Components

1. **Dashboard Page** (`src/pages/dashboard.astro`)
   - Protected by Stack Auth authentication
   - Redirects unauthenticated users to sign-in
   - Full-page layout for the C1Chat interface

2. **C1Dashboard Component** (`src/components/C1Dashboard.tsx`)
   - React component wrapping the C1Chat SDK
   - Configured with ThemeProvider for consistent styling
   - Handles message processing via API route

3. **API Route** (`src/pages/api/c1.ts`)
   - Server-side endpoint that proxies requests to Thesys API
   - Handles streaming responses from the AI model
   - Securely stores API key on the server

### Environment Variables

The following environment variables are configured in `.env`:

```env
THESYS_API_KEY=sk-th-bAQlkYTOaFSMcUMKbMN3GGEBmy5BVdKAxlFP5bORRPjehxKfmOJNUc08um5bvQyxFmRC6IvZLXsKXYo9bgUxYCjFwfWkTHSI4D0V
PUBLIC_THESYS_API_KEY=sk-th-bAQlkYTOaFSMcUMKbMN3GGEBmy5BVdKAxlFP5bORRPjehxKfmOJNUc08um5bvQyxFmRC6IvZLXsKXYo9bgUxYCjFwfWkTHSI4D0V
```

### Dependencies Added

```json
{
  "@thesysai/genui-sdk": "^0.7.1",
  "@crayonai/react-core": "^0.7.6",
  "@crayonai/react-ui": "^0.9.0",
  "@radix-ui/react-dialog": "^1.1.15",
  "lucide-react": "^0.469.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "@astrojs/react": "^4.4.2"
}
```

## User Flow

1. User signs in via `/auth/signin`
2. After authentication, user is redirected to `/dashboard`
3. Dashboard verifies authentication token
4. C1Chat component loads with full-page interface
5. User can interact with the AI assistant
6. Messages are sent to `/api/c1` which forwards to Thesys API
7. Responses stream back in real-time

## Features

- **Authentication Protection**: Dashboard is only accessible to logged-in users
- **Full-Page Experience**: The generative UX takes over the entire viewport
- **Streaming Responses**: Real-time AI responses with smooth streaming
- **Theme Support**: System theme support (light/dark mode)
- **Persistent Sessions**: Thread management for conversation continuity

## Customization

To customize the agent, you can modify the `C1Dashboard.tsx` component:

```tsx
<C1Chat
  processMessage={processMessage}
  formFactor="full-page"              // or "side-panel"
  agentName="Chief of Staff Assistant" // Custom agent name
  logoUrl={logoUrl}                    // Custom logo
  scrollVariant="always"               // Scroll behavior
/>
```

## API Endpoint

The sys.dev API is accessed at:
```
https://api.thesys.dev/v1/chat/completions
```

The API route handles:
- Message formatting
- Streaming response parsing
- Error handling
- Response formatting for the C1Chat component

## Testing

To test the integration:

1. Start the dev server:
   ```bash
   pnpm dev
   ```

2. Navigate to `/auth/signin` and sign in

3. You'll be redirected to `/dashboard`

4. Start interacting with the AI assistant

## Production Deployment

The integration is ready for production deployment. Ensure:

1. Environment variables are set in your production environment
2. The build completes successfully: `pnpm run build`
3. The CSS file is copied to the `dist/client` directory during build

## Notes

- The CSS file is served from `/genui-sdk.css` (copied to public directory)
- Authentication uses Stack Auth with session cookies
- The API key should be kept secure and never exposed to the client
