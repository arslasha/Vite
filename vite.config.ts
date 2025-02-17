import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

  export default defineConfig({
    plugins: [
        react(),
    ],
  server: {
      host: true,
      port: 3000,
        open: true,
        proxy: {
        '/api': 'http://localhost:5000',
    },
  },
  build: {
      outDir: 'dist',
          sourcemap: true,
  },
  css : {
      modules: {
        localsConvention: "camelCase",
      },
  },
  resolve: {
      alias: {
        '@': '/src',

      },
  },
});
