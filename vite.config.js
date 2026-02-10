import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/', // or '/your-subfolder/' if deployed in subfolder
  assetsInclude: ['**/*.JPG'],
});