import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: resolve(import.meta.dirname),
  base: '/gestalten/',
  build: {
    outDir: resolve(import.meta.dirname, '../gestalten'),
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: resolve(import.meta.dirname, 'index.html')
    }
  }
});
