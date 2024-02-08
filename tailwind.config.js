/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeOut: {
          'from': { opacity: 1 },
          'to': { opacity: 0 }
        }
      },
      animation: {
        'fade-out': 'fadeOut 1s forwards'
      }
    },
    colors: {
      primary: '#3b28cc',
      secondary: '#e7e8ef',
      white: '#fff',
      dark: '#0B091A',
      transparent: 'transparent',
    }
  },
  plugins: [],
};
