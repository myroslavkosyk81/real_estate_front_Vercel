import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: `${process.env.VITE_REACT_APP_BACKEND_BASEURL}`,
        
        secure: false,
      },
    },
  },
  plugins: [react()],
})
