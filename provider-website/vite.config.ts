import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  // Env
  // Config
  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: 1110,
    },
    preview: {
      port: 1110,
    },
  };
});
