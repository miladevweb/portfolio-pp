import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        foreground: 'hsl(var(--foreground))',
        background: 'hsl(var(--background))',
      },

      gridColumn: {
        content: 'content',
        breakout: 'breakout',
        'full-width': 'full-width',
      },

      padding: {
        'x-small': 'var(--padding-x-small)',
        'x-large': 'var(--padding-x-large)',
        'y-small': 'var(--padding-y-small)',
        'y-large': 'var(--padding-y-large)',
      },
    },
  },
  plugins: [],
}
export default config
