import { defineConfig, fontProviders } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Playfair Display',
        cssVariable: '--font-playfair',
        weights: [400, 700]
      },
      {
        provider: fontProviders.google(),
        name: 'Inter',
        cssVariable: '--font-inter',
        weights: [400, 500, 600]
      }
    ]
  }
});
