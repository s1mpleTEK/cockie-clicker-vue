import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'name of the repo for deploy',
  test: {
    globals: true,
  },
  plugins: [vue()],
});
