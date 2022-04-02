import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  preview: {
    port: 5000,
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'IISER Kolkata App',
        short_name: 'IISER K App',
        description: 'The one stop app for IISER K students',
        icons: [
          {
            src: '/icons/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/mask-icon.svg',
            type: 'image/svg+xml',
            sizes: '1365x1365',
            purpose: 'maskable',
          },
        ],
        start_url: '/',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
      },
      devOptions: {
        navigateFallback: 'index.html',
        type: 'module',
        enabled: true,
      },
      strategies: 'injectManifest',
      srcDir: 'src',
      injectRegister: 'script',
    }),
  ],
});
