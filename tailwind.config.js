/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/components/Home/Home.jsx",
    "src/components/Home/Sections/FirstSEction.jsx",
    "src/components/Home/Sections/SecondSection.jsx",
    "src/components/Home/Sections/ThirdSection.jsx",
    "src/components/Home/Sections/FourthSection.jsx",
    "src/components/Login/User_login.jsx",
    "src/components/Signup/User_signup.jsx",
    "src/components/Header/Header.jsx",
    "src/components/Article/Article.jsx",
    "src/components/Footer/Footer.jsx"
  ],
  theme: {
    extend: {
      keyframes: {
        popUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      screens: {
        'sm': [{'min': '200px', 'max': '767px'}],
        'md': '768px', // medium screens
     //   'md': [{'min': '768px'}], // medium screens
        //'lg': '1024px', // large screens
        //'xl': '1280px', // extra-large screens
      },
      animation: {
        'slideInLeft': 'slideInLeft 2s ease-out 0s 1 forwards',
        'slideInRight': 'slideInRight 2s ease-out 0s 1 forwards',
        'popUp': 'popUp 1s ease forwards', 
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
