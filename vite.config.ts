import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Split React ecosystem into vendor chunk
          if (id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/react-router') ||
              id.includes('node_modules/react-helmet-async') ||
              id.includes('node_modules/scheduler')) {
            return 'vendor-react'
          }
          // Split question data (1069 questions) into separate chunk
          if (id.includes('/src/data/questions')) {
            return 'data-questions'
          }
        },
      },
    },
  },
})
