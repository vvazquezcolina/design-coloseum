import type { Config } from 'tailwindcss';

/**
 * tailwind.config.ts — VoltSwap
 * Color/font tokens mirrored from src/lib/brand-tokens.ts and brand-bible.json.
 * The shipped deliverable (../index.html) inlines these as CSS custom properties.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#16e0a3',
        'brand-primary-hover': '#5cf0c4',
        'brand-secondary': '#0c8f74',
        'brand-bg': '#0e1116',
        'brand-bg-alt': '#161b22',
        'brand-card': '#1c232d',
        'brand-footer': '#0a0d11',
        'brand-cta-text': '#06231b',
        'brand-heading': '#f4f7f9',
        'brand-body': '#c2cdd6',
        'brand-muted': '#8b97a3',
        'brand-border': '#2a323d',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
