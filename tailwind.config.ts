import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101112',
        panel: '#1f2022',
        panel2: '#262729',
        line: 'rgba(255,255,255,.12)',
        mint: '#25c765',
        muted: '#b5b8bd'
      },
      fontFamily: {
        sans: ['Inter Tight', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        glow: '0 0 42px rgba(37, 199, 101, .16)',
        card: '0 18px 46px rgba(0,0,0,.24)'
      }
    }
  },
  plugins: []
} satisfies Config;

