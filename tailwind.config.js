module.exports = {
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    }
  },
  purge: ['./pages/**/*.js', './components/**/*.js'],
  entry: './index.js',
  stats: { warnings:false },
  darkMode: false,
  variants:{
    extend: {
      opacity: ["disabled"]
    }
  }
}
