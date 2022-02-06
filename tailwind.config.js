module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        mp: '0px 4px 12px rgba(0, 0, 0, 0.05)'
      },
      height: {
        '750': '46.875rem', //  750px
        '440': '440px'
      },
      zIndex: {
        '-1': '-1' // z-index: -1
      },
      colors: {
        gray: {
          standard: '#E9EAED',
        },
      },
      spacing: {
        '296': '18.5rem',
      }
    },
  variants: {
    extend: {},
  },
  plugins: [],
  }
}
