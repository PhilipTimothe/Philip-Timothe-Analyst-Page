import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://philiptimothe.com",
  base: "/Philip-Timothe-Analyst-Page",
  build: {
    assets: "_assets",
  },
  vite: {
    build: {
      assetsDir: "assets",
    },
  },
});
