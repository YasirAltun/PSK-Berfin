/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base':     '#FAFAF8',
        'mint-light':  '#C8DDD4',
        'mint':        '#A8C5B5',
        'mint-dark':   '#3D5A47',
        'beige-light': '#F0E8DC',
        'beige':       '#E8DDD0',
        'beige-dark':  '#D4C4B0',
        'brown':       '#6B5344',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
