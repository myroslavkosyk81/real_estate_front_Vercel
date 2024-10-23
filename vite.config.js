import { defineConfig, loadEnv  } from 'vite'

import react from '@vitejs/plugin-react-swc'

console.log(process.env.VITE_APP_API_URL)

export default defineConfig({
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        // target: 'http://localhost:3000',
        target: `${process.env.VITE_APP_API_URL}`,
=======
        //target: `${process.env.VITE_REACT_APP_BACKEND_BASEURL}`,
        target: 'https://real-estate-back-vercel.vercel.app/',
        
>>>>>>> de3be789db2352a269d3aa9c9cde2fa706f18ec8
        secure: false,
      },
    },
  },
  plugins: [react()],
})