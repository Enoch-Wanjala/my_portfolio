export const site = {
  name: 'Developer Mwilwaji',
  author: 'Enoch Wanjala',
  title: 'Developer Mwilwaji — Frontend Engineer',
  description:
    'Frontend engineer building fast, responsive, accessible and visually precise web experiences.',
  url: String(import.meta.env.VITE_SITE_URL || 'https://example.com'),
  email: 'developermwilwaji@gmail.com',
  phone: '0706486866',
  location: 'Nairobi, Kenya',
  themeColor: '#131315'
} as const;
