/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        githubBlack: '#02040a',
        mailPink: '#C3073F',
        linkedInBlue: '#0b65c2'
      },
    },
  },
  plugins: [],
}

