import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'infra',
      remotes: {
        project: 'https://project-jerusalem-2.vercel.app/assets/remoteEntry.js', 
        communication: 'https://communication-jlm-2-9b72.vercel.app/assets/remoteEntry.js',
        specs: 'https://jlm-specs-2.vercel.app/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom','react-router-dom'],
    }),
  ],
    build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

