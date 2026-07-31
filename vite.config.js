import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Correct for a GitHub Pages repository named:
  // gsc_mobile_landing_overlay
  base: "/gsc_mobile_landing_overlay/",
});