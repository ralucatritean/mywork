import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mywork/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  publicDir: 'public'
})