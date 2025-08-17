import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// user/organization site must use base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/', 
})
