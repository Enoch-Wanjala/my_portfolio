# Enoch Wanjala Portfolio

A modern frontend portfolio for Enoch Wanjala, built as a fast, accessible, responsive React application. The site presents selected projects, technical skills, professional experience, and a validated contact workflow in a polished developer-focused interface.

## Features

- Multi-page portfolio with React Router
- Responsive layouts for mobile, tablet, desktop, ultrawide, and 4K screens
- Dark premium UI with green accent system
- Project archive with filtering
- Experience timeline
- Skills and services sections
- Accessible contact form with validation
- EmailJS-ready contact submission
- SEO metadata per route with Open Graph and Twitter Cards
- Structured data with JSON-LD
- PWA manifest, service worker, and install prompt
- Smooth scrolling with Lenis
- Motion-enhanced page and section transitions
- Custom cursor on desktop pointer devices
- Back-to-top and scroll progress indicators
- Strict TypeScript, ESLint, Prettier, Husky, and lint-staged

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- React Helmet Async
- React Hook Form
- Zod
- React Icons
- Lenis
- EmailJS
- ESLint
- Prettier
- Husky
- lint-staged

## Project Structure

```txt
src/
├── app/              # Application shell and global providers
├── assets/           # Images, icons, and font placeholders
├── animations/       # Shared animation variants
├── components/       # Reusable UI, layout, sections, and common components
├── constants/        # Site-wide constants
├── context/          # Lightweight app context
├── data/             # Portfolio content and navigation data
├── hooks/            # Reusable browser and UI hooks
├── layouts/          # Route layouts
├── lib/              # Shared library helpers
├── pages/            # Route-level page components
├── routes/           # Router configuration
├── services/         # External service integrations
├── styles/           # Global CSS and Tailwind layers
├── types/            # Shared TypeScript types
└── utils/            # Small utility functions
```

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app will be available at the local Vite URL printed in the terminal.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Runs TypeScript checks and creates a production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for verification.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run format
```

Formats the codebase with Prettier.

## Environment Variables

Create a `.env.local` file from `.env.example`:

```bash
VITE_SITE_URL=https://your-domain.com
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

If EmailJS variables are not configured, the contact form uses a safe simulated success state so the UI can still be tested locally.

## Content Management

Most portfolio content is data-driven. Update these files to change content without touching UI components:

- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/experience.ts`
- `src/data/services.ts`
- `src/data/navigation.ts`
- `src/data/socials.ts`
- `src/data/stats.ts`
- `src/data/contact.ts`

## Deployment

### Vercel

Recommended settings:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

The included `vercel.json` rewrites all routes to `index.html`, which keeps React Router deep links working after deployment.

### Netlify or Cloudflare Pages

- Build command: `npm run build`
- Publish/output directory: `dist`

## Quality Checks

Before deploying, run:

```bash
npm run lint
npm run build
```

Both commands should complete successfully.

## License

This project is intended for Enoch Wanjala’s personal portfolio.
