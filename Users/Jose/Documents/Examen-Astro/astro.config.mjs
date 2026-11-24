import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jose-luis-pereira-ferreras.github.io/Examen-Astro',
  base: '/Examen-Astro/',
  // En GitHub Pages los paths que empiezan con "_" no se sirven,
  // así que cambiamos "_astro" por "site".
  build: { assets: 'site' },
  integrations: [sitemap()],
});
