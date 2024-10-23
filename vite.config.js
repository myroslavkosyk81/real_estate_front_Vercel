import { defineConfig, loadEnv  } from 'vite'

import react from '@vitejs/plugin-react-swc'

console.log(process.env.VITE_APP_API_URL)

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:3000',
        target: `${process.env.VITE_APP_API_URL}`,
        secure: false,
      },
    },
  },
  plugins: [react()],
})