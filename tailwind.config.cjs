/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
typography: {
        DEFAULT: {
          css: {
          }}}
    },
	},
	plugins: [require('@tailwindcss/typography'), require('@catppuccin/tailwindcss')],
}
