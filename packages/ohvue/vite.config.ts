import { viteExternal } from '@ohvue/utils'
import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
  },
  plugins: [Dts(), viteExternal],
})
