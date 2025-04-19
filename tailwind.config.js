/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: "#3B82F6",
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 