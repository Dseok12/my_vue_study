// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // .env 로드 (VITE_ 로 시작하는 값들 사용)
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  // 예: /api
  const API_PREFIX = env.VITE_API_PREFIX || '/api'
  // 예: http://localhost:8080
  const API_TARGET = env.VITE_API_TARGET || ''

  // proxy 설정 (타겟 없으면 proxy 비워서 런타임 에러 방지)
  const proxy = {}
  if (API_TARGET) {
    proxy[API_PREFIX] = {
      target: API_TARGET,
      changeOrigin: true,

      // /api/user -> /user 로 보내고 싶으면 아래 주석 해제
      // rewrite: (p) => p.replace(new RegExp(`^${API_PREFIX}`), ''),

      // 필요 시:
      // secure: false, // https 셀프사인일 때만
      // ws: true,      // 웹소켓 필요할 때만
    }
  }

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        // 추천: URL 기반 alias (Vite 공식 예시 방식)
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@css': fileURLToPath(new URL('./src/css', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
      },
    },
    server: {
      port: 3000,
      strictPort: true,
      open: true,
      cors: true,
      hmr: { overlay: true },
      proxy,
    },
  }
})
