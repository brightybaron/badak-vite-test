/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { backgroundImage: { "hero-home": "linear-gradient(180deg, rgba(1, 1, 1, 0.5) 0%, rgba(0, 0, 0, 0.4) 25%, rgba(255, 255, 255, 0) 100%), url('/img/hero1.png')" }, fontFamily: {
      'sans': ['Open Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
    }},
  },
  plugins: [],
};
