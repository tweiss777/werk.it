module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        strong: ['Coiny', 'sans-serif'],
      },
      colors: {
        main: '#853177',
        mainHover: '#B10494',
        secondary: '#615A56',
        bgMain: '#853177',
        bgSecondary: '#cfc7f8',
      },
      spacing: {
        46: '11.25rem' /* 180px */,
      },
    },
  },
  plugins: [],
};
