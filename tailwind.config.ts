import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#a0dcff',
        secondary: '#dd6e42',
        tertiary: '#e8dab2',
        quaternary: '#4f6d7a',
        quinary: '#153131',
        senary: '#DFECF0',
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
}
export default config
