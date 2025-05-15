import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  //server: {
  //  host: 'yeul.local', // 👉 esto permite usar http://yeul.local
   // port: 5174,         // 👉 elegí el puerto que quieras
   // strictPort: true    // 👉 si está ocupado, Vite NO lo cambiará automáticamente
  //},
});