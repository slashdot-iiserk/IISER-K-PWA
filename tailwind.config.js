/* eslint-disable */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'grid-cols-auto': (value) => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
          }),
        },
        { values: theme('width') },
      );
    }),
  ],
};
