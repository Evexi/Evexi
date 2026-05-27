import { defineConfig } from 'vite';
import path from 'path';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: './',
  plugins: [
    devtools(),
    solidPlugin(),
    legacy({
      targets: ['chrome >= 38'],
    }),
  ],
  server: {
    port: 3000,
    allowedHosts: true
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
