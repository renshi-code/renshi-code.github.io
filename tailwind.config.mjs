/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matcha: {
          50: '#f0f5f1',
          100: '#e1ede3',
          200: '#c5ded0',
          300: '#9ac5ab',
          400: '#6ca784',
          500: '#488c63',
          600: '#35714e',
          700: '#285a3e',
          800: '#204732',
          900: '#1a3b2a',
          accent: '#52b788',
          hover: '#74c69d',
        },
        sakura: {
          50: '#fdf2f5',
          100: '#fbe4eb',
          200: '#f7cad8',
          300: '#f1a2bd',
          400: '#f472b6',
          500: '#d94677',
          600: '#be185d',
        },
        obsidian: {
          950: '#080c09',
          900: '#0d120f',
          850: '#111713',
          800: '#141c16',
          750: '#19231c',
          700: '#1e2b22',
          600: '#2a3b30',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(82, 183, 136, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
