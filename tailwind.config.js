/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/components/**/*.{js,jsx,ts,tsx}',
    './app/screens/**/*.{js,jsx,ts,tsx}',
    './app/navigations/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00a69c',
        gray: '#f9f9f9',
        lightGreen: '#7cccb6',
        secondary: '#3e4856',
        blue: '#016d98',
      },
      fontSize: {
        cxs: '0.6rem',
      },
      borderWidth: {
        0.5: '0.5px',
        1: '1px',
      },
    },
  },
  plugins: [],
};
