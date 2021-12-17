import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import WindiCSS from 'vite-plugin-windicss'
import windiConfig from './windi.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS({
      config: {
        ...windiConfig,
      },
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
