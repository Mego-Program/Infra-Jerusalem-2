// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()], 
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'infra',
      remotes: {
        // make sure url are not the same
        project: 'https://project-jerusalem-2.vercel.app/assets/remoteEntry.js', 
        // communication: 'http://localhost:4173/assets/remoteEntry.js',
        specs: 'https://jlm-specs-2.vercel.app/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom','react-router-dom' /* other shared dependencies */],
    }),
  ],
  // ... other configurations
    build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

