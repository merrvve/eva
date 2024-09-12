import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";



export default defineConfig({
  site: "https://eva.town",
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
    "/projects/genderswap": "/posts/genderswap",
    "/projects/boundaries-map": "/posts/boundaries-map",
    "/projects/commonplace": "/posts/commonplace",
    "/friends": "/webrings",
  },
});
