module.exports = {
  mode: '',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
     '50%': '50%',
     '16': '4rem',
    },
  
    extend: {
      fontFamily: {
       'roboto':[ 'Roboto','sans-serif'],
       'fredoka-one': ['"Fredoka One"', 'cursive'],
        'sans': ['Inter var', 'sans-serif'],
        'serif': ['Inter var', 'serif'],
        'mono': ['Inter var', 'monospace'],
      },
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#2B3475',
          300: '#0C1740',
          400: '#f4511e',
          500: '#d7ccc8'
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        yellow:{
          200: '#F9E641'
        }
      },
      lineHeight: {
        hero: '4.5rem',
      },
      backgroundImage: {
        'hero-banner': "url('/images/banner.jpeg')",
       },
      inset:{
        '17':'68px',
        '26':'104px'
      }
      
    },
  },
  variants: {},
  plugins: [],
};
