import { defineConfig } from "astro/config";
export default defineConfig({
  site: import.meta.env.SITE_URL
    ? import.meta.env.SITE_URL
    : "http://localhost",
});
