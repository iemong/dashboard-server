import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/meter': {
        target: 'http://localhost:3000/meter',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/meter/, ''),
      },
    },
  },
  build: {
    outDir: '../dist/frontend',
  },
});
