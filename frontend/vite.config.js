import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Must match the CORS origin configured in backend/Wasel.Api/Program.cs.
    port: 5173,
    strictPort: true,
  },
});
