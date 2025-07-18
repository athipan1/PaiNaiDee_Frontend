import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ ใช้ path แบบ relative สำหรับ deploy ใน subdirectory เช่น GitHub Pages
  build: {
    outDir: 'docs', // ✅ สร้างไฟล์ build ไปยังโฟลเดอร์ docs/
    emptyOutDir: true // ✅ ล้าง docs ก่อน build เพื่อป้องกันไฟล์เก่า
  },
  server: {
    port: 5173, // ✅ กำหนดพอร์ต dev server (ถ้าต้องการ)
    open: true  // ✅ เปิด browser อัตโนมัติเมื่อรัน dev
  }
})