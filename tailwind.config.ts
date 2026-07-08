import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#131315',
        background: '#131315',
        surface: '#131315',
        panel: '#201f22',
        panel2: '#2a2a2c',
        line: '#3d4a3d',
        mint: '#4be277',
        primary: '#4be277',
        primaryContainer: '#22c55e',
        muted: '#bccbb9',
        textMain: '#e5e1e4',
        secondary: '#c6c6c7'
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem'
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        glow: '0 0 20px rgba(34, 197, 94, .10)',
        card: '0 18px 46px rgba(0,0,0,.22)'
      }
    }
  },
  plugins: []
} satisfies Config;
