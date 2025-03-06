import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://philiptimothe.github.io/Philip-Timothe-Analyst-Page",
  base: "/Philip-Timothe-Analyst-Page/",
  build: {
    assets: "assets",
  },
});
