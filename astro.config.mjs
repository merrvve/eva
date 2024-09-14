// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';  // Import rehype-slug
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import netlify from '@astrojs/netlify';
import expressiveCode from "astro-expressive-code";
import { autolinkConfig } from './plugins/rehype-autolink-config';
// https://astro.build/config
export default defineConfig({
  integrations: [react(), 
    expressiveCode({
      styleOverrides: {
        codeFontFamily:
          "'MonoLisa', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      },
    }),
    mdx(),
  
  ],
  markdown: {
		rehypePlugins: [
			rehypeSlug,
			[rehypeAutolinkHeadings,autolinkConfig]
		]
	},
  output: 'hybrid',
  adapter: netlify(),
  site: 'https://evamerve.netlify.app',
  
});