import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // The TechStack chunk (three + rapier physics WASM) is ~2.3 MB but lazy-loaded on scroll.
    chunkSizeWarningLimit: 2500,
  },
});
