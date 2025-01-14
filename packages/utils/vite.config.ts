import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'
import { viteExternal } from './src/index'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['node:fs', 'node:path', 'node:process'],
    },
  },
  plugins: [Dts(), viteExternal],
})
