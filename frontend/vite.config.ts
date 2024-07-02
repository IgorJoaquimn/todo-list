import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@components': path.resolve(__dirname, './src/Components'),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@custom_types': path.resolve(__dirname, './src/types'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
});
