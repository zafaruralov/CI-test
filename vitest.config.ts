import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    include: ["src/**/*.test.ts"],
  }
});
