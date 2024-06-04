/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'strong-blue':'#032D59',
        'nice-blue':'#189FDA',
        'font-clear':'#F0F9FA'
      },
      fontFamily: {
        'family-open-sans': ['"Open Sans"'],
        'logo-font': ['Oswald']
      }
    },
  },
  plugins: [],
}

