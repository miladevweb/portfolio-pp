import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './shared/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
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
