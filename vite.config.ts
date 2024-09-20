import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import stylable from "@stylable/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [stylable()],
    },
  },
  plugins: [vue()],
})
