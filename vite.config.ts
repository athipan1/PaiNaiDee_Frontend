import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/PaiNaiDee_Frontend/', // ใช้สำหรับ GitHub Pages
  plugins: [react()],
})