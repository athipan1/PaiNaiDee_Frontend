import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // เพิ่มในกรณี deploy ที่ subdirectory
  build: {
    outDir: 'docs' // 🟢 ให้ build ไปยังโฟลเดอร์ docs
  }
})