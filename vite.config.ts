import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        background: 'scripts/background.ts',
        content: 'scripts/background.ts',
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'background' || chunkInfo.name === 'content') {
            return `[name].js`; // No hash for specific entry files
          }
          return `[name].[hash].js`; // Default pattern with hash
        },
      },
    },
  },
});
