/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        constr: {
          bg: '#111111',
          dark: '#1a1a1a',
          card: '#222222',
          border: '#333333',
        },
        accent: {
          orange: '#f97316',
          yellow: '#fbbf24',
          light: '#fed7aa',
        },
        blue: {
          logo: '#1a4b8c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
