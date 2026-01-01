// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef6f8',
          100: '#fdecf2',
          200: '#fad0e0',
          300: '#f8a6c4',
          400: '#f47ba8',
          500: '#ec4899',  // Keeping this as a slightly stronger accent
          600: '#d42d7d',
          700: '#b21e63',
          800: '#8e1b53',
          900: '#6d1e4a',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}