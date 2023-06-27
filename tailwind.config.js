/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      heandingL: ['80px', '80px'],
      headingM: ['56px', '64px'],
      headingS: ['50px', '50px'],
      headingXS: ['32px', '40px'],
      headingXXS: ['28px', '36px'],
      bodyM: ['20px', '36px'],
      body: ['18px', '32px'],
      bodyS: ['16px', '32px'],
    },
    colors: {
      darkPurple: '#24053E',
      davysGrey: '#584D62',
      eucalyptus: '#44FFA1',
      ghostWhite: '#FCF8FF',
      white: '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        pattern1: "url('../public/images/bg-pattern-1.svg)",
        pattern2: "url('../public/images/bg-pattern-2.svg)",
        pattern3: "url('../public/images/bg-pattern-3.svg)",
      },
      fontFamily: {
        body: 'Manrope',
        title: 'Fraunces\\ 144pt',
      },
    },
  },
  plugins: [],
}
