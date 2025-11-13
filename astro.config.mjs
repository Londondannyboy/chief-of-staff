// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://chiefofstaff.quest',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [tailwind(), react()],
  server: {
    host: true // Listen on all network interfaces (0.0.0.0)
  },
  vite: {
    resolve: {
      alias: {
        'lodash/escape': 'lodash/escape.js',
        'lodash/unescape': 'lodash/unescape.js',
      }
    },
    ssr: {
      noExternal: ['@thesysai/genui-sdk', '@crayonai/react-core', '@crayonai/react-ui']
    }
  }
});
