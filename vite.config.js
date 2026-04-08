import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { resolve } from 'path';
import njk from 'nunjucks';

export default defineConfig({
  plugins: [
    nunjucks({
      nunjucksEnvironment: njk.configure([
        resolve(__dirname, 'src/templates'),
        resolve(__dirname, '.')
      ]),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
    outDir: 'dist',
  },
});
