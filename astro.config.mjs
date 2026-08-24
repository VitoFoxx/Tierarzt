import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";

export default defineConfig({
  site: "https://example.com",
  output: "static",
  adapter: cloudflare(),
  integrations: [tailwind(), sitemap(), icon()],
});
