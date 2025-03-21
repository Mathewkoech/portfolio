import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // For local dev to accept connections from anywhere
    // Remove port config to allow Vercel to handle the dynamic port
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Simplify imports with "@"
    },
  },
  build: {
    // Ensure production optimizations
    chunkSizeWarningLimit: 500,
    minify: "esbuild",
    target: "esnext",
  },
  optimizeDeps: {
    include: ["some-large-lib"],
  },
}));
