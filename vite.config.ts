import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dev server binds to all interfaces so it's reachable on your LAN too
// (useful for testing the camera on a phone via HTTPS/local network).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
});
