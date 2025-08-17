import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
const isUserSite = repo && repo.toLowerCase().endsWith('.github.io')

export default defineConfig({
  plugins: [react()],
  base: isUserSite ? '/' : `/${repo}/`,
})
