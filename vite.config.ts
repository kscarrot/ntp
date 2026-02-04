import process from 'node:process'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  plugins: [
    react(
      process.env.VITEST
        ? {}
        : {
            babel: {
              plugins: [['babel-plugin-react-compiler']],
            },
          },
    ),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React 单独打包
          if (id.includes('node_modules/react/') && !id.includes('react-dom')) {
            return 'react'
          }
          // React DOM 单独打包
          if (id.includes('node_modules/react-dom/')) {
            return 'react-dom'
          }
          // React Router 单独打包
          if (id.includes('node_modules/react-router')) {
            return 'react-router'
          }
          // 其他 node_modules 打包到 vendor
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
})
