import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jose-luis-pereira-ferreras.github.io/Examen-Astro',
  base: '/Examen-Astro/',
  integrations: [sitemap()],
});
