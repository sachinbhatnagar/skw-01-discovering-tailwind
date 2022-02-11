module.exports = {
  content: ['./src/index.html', './src/css/*'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        premium: '0px 0px 40px 5px rgba(89, 0, 255, 0.7)',
      },
      colors: {
        purple: {
          950: 'rgb(109, 13, 210)',
        },
      },
      fontFamily: {
        sans: ["'Open Sans'"],
      },
    },
  },
  plugins: [],
};
