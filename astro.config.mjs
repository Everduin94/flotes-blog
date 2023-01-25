import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});