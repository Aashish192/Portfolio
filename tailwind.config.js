module.exports = {
    content: [
      './src/**/*.{html,js}', // Adjust based on your project structure
    ],
    theme: {
      extend: {
        fontSize: {
          'xxs': '0.625rem',  // Custom extra-small text size
          'xxl': '1.75rem',   // Custom extra-large text size
          '3xl': '2.25rem',   // Custom 3xl text size
          '4xl': '3rem',      // Custom 4xl text size
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': { 'background-position': '0% 50%' },
            '50%': { 'background-position': '100% 50%' },
          },
        },
        animation: {
          'gradient-x': 'gradient-x 3s ease infinite',
        },
        boxshadow:{
          'blueshadow':'0px 6px 6px (0, 0, 255, 0.3)',
        },
        fontFamily: {
          cartoon: ['"Chewy"', 'cursive'], // Replace with the font you chose
        },
      },
    },
    plugins: [],
  }