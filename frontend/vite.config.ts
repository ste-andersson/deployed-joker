import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "/deployed-joker/",
  test: {
    globals: true,
    environment: "jsdom",
  },
});
