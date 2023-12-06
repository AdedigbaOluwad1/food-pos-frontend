import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#1F1D2B',
      'primary-bg': '#252836',
      'secondary': '#EA7C69',
      'light': '#fff',
      'grey': '#677489',
      'ash': '#ECECEC',
      'success': '#3ABF38',
      'light-70': '#F4F4F4',
      'grey-text': '#3E3E3E',
      'border-color': '#E3E8EF',
    },
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1200px'
    }
  },
  plugins: [],
}
export default config
