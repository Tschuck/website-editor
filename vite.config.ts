import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
  server: {
    port: 3112,
    allowedHosts: ["rhino-glorious-thankfully.ngrok-free.app"],
  },
  build: {
    minify: "terser",
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true,
        manualChunks(id: string) {
          if (id.includes("jsoneditor")) {
            return "jsoneditor";
          }
          if (id.includes("node_modules") || id.includes("commonjsHelper")) {
            return "vendor";
          }
        },
      },
    },
  },
});
