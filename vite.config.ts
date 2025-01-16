import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // @ts-expect-error - vite types are not up to date
  test: {
    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
    },
  },
});
