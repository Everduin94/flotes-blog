/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
     gridTemplateColumns: {
        "left": "max-content minmax(0, 1fr)",
        "right": "minmax(0, 1fr) max-content",
        "mid": "minmax(0, 1fr) max-content minmax(0, 1fr)",
     },
     gridTemplateRows: {
        "bottom": "max-content minmax(0, 1fr)",
        "top": "minmax(0, 1fr) max-content",
        "top-2": "1fr max-content",
        "mid": "minmax(0, 1fr) max-content minmax(0, 1fr)",
     },
     typography: {
         DEFAULT: {
           css: {
              'code::before': {
                content: 'none', // don’t generate the pseudo-element
//                content: '""', // this is an alternative: generate pseudo element using an empty string
              },
              'code::after': {
                content: 'none'
              },
           }
       }
     }
   },
	},
	plugins: [require('@tailwindcss/typography')],
}
