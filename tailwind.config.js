module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '750': '46.875rem' //  750px
      },
      zIndex: {
        '-1': '-1' // z-index: -1
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
