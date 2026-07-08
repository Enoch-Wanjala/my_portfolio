import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08090a',
        panel: '#151719',
        panel2: '#1d1f21',
        line: 'rgba(255,255,255,.11)',
        mint: '#2ad36d',
        muted: '#a8adb4'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        glow: '0 0 42px rgba(42, 211, 109, .18)',
        card: '0 24px 70px rgba(0,0,0,.34)'
      }
    }
  },
  plugins: []
} satisfies Config;
