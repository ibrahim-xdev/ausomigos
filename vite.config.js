import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the built site works from a GitHub Pages
// project URL (https://username.github.io/repo-name/) without
// any extra configuration. Also fine on a custom domain.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
