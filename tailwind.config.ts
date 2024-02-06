import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)'],
        serif: ['var(--font-garamond)'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), 'daisyui'],
};
export default config;
