import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({site:'https://shujianguosjg-dot.github.io',output:'static',integrations:[tailwind()]});