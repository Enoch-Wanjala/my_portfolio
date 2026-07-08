export const site = {
  name: 'Enoch.dev',
  author: 'Enoch Wanjala',
  title: 'Enoch Wanjala — Frontend Engineer',
  description:
    'Frontend engineer building fast, responsive, accessible and visually precise web experiences.',
  url: String(import.meta.env.VITE_SITE_URL || 'https://example.com'),
  email: 'developermwilwaji@gmail.com',
  phone: '0706486866',
  location: 'Nairobi, Kenya',
  themeColor: '#0d0f10'
} as const;
