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
        project: 'http://localhost:4173/assets/remoteEntry.js', // Adjust the URL to where your "Project" app is running
      },
      shared: ['react', 'react-dom', /* other shared dependencies */],
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

