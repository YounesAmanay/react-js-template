import path from 'path';
import checker from 'vite-plugin-checker';
import { loadEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ----------------------------------------------------------------------

const PORT = 3031;

const env = loadEnv('all', process.cwd());

export default defineConfig({
   // base: env.VITE_BASE_PATH,
   plugins: [
      react(),
      checker({
         eslint: {
            lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
         },
         overlay: {
            position: 'tl',
            initialIsOpen: false,
         },
      }),
   ],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
         '~': path.resolve(__dirname, './node_modules'),
         'src': path.resolve(__dirname, './src'),
      },
   },
   server: { port: PORT, host: true },
   preview: { port: PORT, host: true },
});
