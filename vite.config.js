import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/Karthik-portfolio/' for GitHub Pages, '/' for Vercel
  base: process.env.VERCEL ? '/' : '/Karthik-portfolio/',
})
