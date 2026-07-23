// @ts-check
import { defineConfig, fontProviders } from 'astro/config';


import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://abidswapnil.github.io",
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  fonts: [{
    provider: fontProviders.google(),
    name: 'Roboto',
    cssVariable: '--font-roboto',
    fallbacks: ['sans-serif'],
  }],
  integrations: [icon()],
});