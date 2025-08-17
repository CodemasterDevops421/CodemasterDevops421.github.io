import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages, set base path automatically from repo name
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]

export default defineConfig({
  plugins: [react()],
  base: repo ? `/${repo}/` : '/',
  server: {
    port: 5173,
    open: true
  }
})