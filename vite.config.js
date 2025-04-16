import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/', //required for Vercel if you need it
  build: {
    outDir: 'dist'
  },
  esbuild: {
    loader: 'jsx',
    include: [
      // Add paths to your JSX files if needed
      'src/**/*.jsx',
      'src/**/*.js',
    ],
  },
});
