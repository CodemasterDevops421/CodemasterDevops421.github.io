// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CodemasterDevops421.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
