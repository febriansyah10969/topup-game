import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint"; // Correct case for the plugin
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer"; // Use import for ES modules
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // Alias for src folder
    },
  },
  plugins: [
    vue(),
    eslintPlugin(), // Corrected plugin name
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // TailwindCSS integration
        autoprefixer(), // Autoprefixer for CSS
      ],
    },
  },
});
