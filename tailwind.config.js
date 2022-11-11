module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      // columns
      columns: {
        '4xs': '14rem',
      },
    },
  },
  plugins: [],
};
