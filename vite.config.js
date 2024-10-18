import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://real-estate-back-vercel.vercel.app/',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
