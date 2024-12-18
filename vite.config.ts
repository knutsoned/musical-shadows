import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/musical-shadows/', // GH-pages location
  plugins: [solidPlugin(), tsconfigPaths(), checker({ typescript: true })],
  define: { 'process.env': {} },
});
