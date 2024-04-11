// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Other configuration...
  define: {
    global: 'window', // Define global as window in the browser
  },
});
