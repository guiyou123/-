import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    target: 'es2018',
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        // 手动分包：第三方库单独打包
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'gsap-vendor': ['gsap'],
          'ogl-vendor': ['ogl'],
        },
      },
    },
    // 增大 chunk 大小警告阈值（媒体文件较大）
    chunkSizeWarningLimit: 1500,
  },
})
