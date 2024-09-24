import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";



export default defineConfig({
  site: "https://criv.netlify.app",
  output: "hybrid",
  prefetch: true,
  integrations: [
    react(),
    expressiveCode({
      styleOverrides: {
        codeFontFamily:
          "'MonoLisa', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      },
    }),
    mdx(),
    sitemap(),
  ],
  trailingSlash: "never",

  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
  redirects: {
    "/projects": "/",
  },
});
