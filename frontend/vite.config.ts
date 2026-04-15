import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/deployed-joker/",
  test: {
    globals: true,
    environment: "jsdom",
  },
});
