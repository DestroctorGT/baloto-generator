import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      primary: {
        DEFAULT: '#e4b648',
        100: '#fbf3e1',
        200: '#f6e7c3',
        300: '#f2dca6',
        400: '#edd088',
        500: '#e4b648',
        600: '#dfa926',
        700: '#c1911c',
        800: '#9f7717',
        900: '#7d5e12',
        1000: '#5b440d'
      },
      secondary: {
        DEFAULT: '#4672e3',
        100: '#e1e8fa',
        200: '#c3d1f6',
        300: '#a4baf1',
        400: '#86a3ed',
        500: '#4672e3',
        600: '#2559de',
        700: '#1d4abf',
        800: '#183d9d',
        900: '#13307b',
        1000: '#0e2359'
      },
      neutrals: {
        white: '#fafafa',
        black: '#0b0a0a',
        100: '#e4e4e4',
        200: '#cfcece',
        300: '#bab8b8',
        400: '#a5a1a1',
        500: '#908b8b',
        600: '#7a7474',
        700: '#655f5f',
        800: '#4e4949',
        900: '#383434',
        1000: '#221f1f'
      },
      success: {
        DEFAULT: '#71e79b',
        100: '#b8f3cd',
        200: '#71e79b',
        300: '#1a9c49'
      },
      warning: {
        DEFAULT: '#EDA145',
        100: '#F4C790',
        200: '#EDA145',
        300: '#CC7914'
      },
      error: {
        DEFAULT: '#C03744',
        100: '#E4626F',
        200: '#C03744',
        300: '#8C1823'
      }
    }
  },
  plugins: []
}
export default config
