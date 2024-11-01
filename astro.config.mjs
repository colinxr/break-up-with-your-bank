import dotenv from 'dotenv'
dotenv.config()

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro'
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from '@playform/compress';
import astrowind from './vendor/integration';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter.mjs';
import react from "@astrojs/react";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) => 
  process.env.CONFIG_EXTENSIONS?.includes('external_scripts') ? items : []


console.log(import.meta.env.PUBLIC_SANITY_PROJECT_ID);

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }), 
    sitemap(), 
    mdx(), 
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template', 
          'gallery', 
          'approval', 
          'document', 
          'advertising', 
          'currency-exchange', 
          'voice-presentation', 
          'business-contact', 
          'database'
        ]
      }
    }), 
    ...whenExternalScripts(() => partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })), 
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false
        }
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1
    }), 
    astrowind({
      config: './src/config.yaml'
    }), 
    react(),
    partytown(),
    sanity({
      projectId: 'd9mgydqm',
      dataset: 'production',
      apiVersion: '2024-01-11',
      useCdn: true,
      studioBasePath: '/admin' // Optional: path where you want to mount the Sanity Studio
    })
  ],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin]
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
})