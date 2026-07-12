import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://sayanmohsin.com',
  output: 'static',
  adapter: cloudflare({}),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
