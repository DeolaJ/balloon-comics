// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        artgrid: 'repeat(auto-fill, 220px)',
        artgridMd: 'repeat(auto-fill, 260px)',
        artgridLg: 'repeat(auto-fill, 300px)',
      },
      boxShadow: {
        card: '0 2px 11px 2px rgba(0, 0, 0, 0.1)',
        under: '0px 1px 10px 1px rgba(0, 0, 0, 0.05)',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      red: colors.red,
      indigo: colors.indigo,
      purple: colors.fuchsia,
      blue: colors.blue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
