import { viteExternal } from '@ohvue/utils'
import Vue from 'unplugin-vue/vite'
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
  plugins: [Vue(), Dts(), viteExternal],
})
