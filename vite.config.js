import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/movie-db/',
  build: {
    outDir: 'movie-db'
  },
  plugins: [react()],
  css:{
    devSourcemap: true,
  },

})
