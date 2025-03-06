import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://philiptimothe.github.io",
  base: "/portfolio",
  build: {
    assets: "assets",
  },
});
