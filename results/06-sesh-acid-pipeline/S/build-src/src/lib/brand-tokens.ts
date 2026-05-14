/**
 * brand-tokens.ts — VoltSwap
 * Source of truth for colors, fonts and extended tokens.
 * Mirrors brand-bible/brand-bible.json. Consumed by index.html (inline CSS vars)
 * and by karpathy_score.mjs for brand-fidelity scoring.
 */

export const brand = {
  // ── Colors (every hex traces to brand-bible.json visualIdentity.colorPalette) ──
  colors: {
    primary: '#16e0a3',        // CTA principal, nav activo
    primaryHover: '#5cf0c4',   // hover de enlaces
    secondary: '#0c8f74',      // botones secundarios, hover de CTA
    bgMain: '#0e1116',         // fondo de página (grafito profundo)
    bgAlt: '#161b22',          // secciones alternas
    bgCard: '#1c232d',         // tarjetas / superficies elevadas
    bgFooter: '#0a0d11',       // footer
    ctaText: '#06231b',        // texto sobre el botón cian
    textHeading: '#f4f7f9',
    textBody: '#c2cdd6',
    textMuted: '#8b97a3',
    border: '#2a323d',
  },

  // ── Typography (matches brand-bible.json — generic default fonts deliberately avoided) ──
  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'IBM Plex Sans', sans-serif",
    nav: "'IBM Plex Sans', sans-serif",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },

  // ── Extended tokens (spacing, elevation, timing, z-index) ──
  spacing: {
    sectionTight: '64px',
    sectionBase: '96px',
    sectionLoose: '120px',
    contentMaxWidth: '1200px',
    cardGap: '28px',
  },
  radius: {
    buttons: '4px',
    cards: '10px',
    images: '8px',
  },
  elevation: {
    sm: '0 1px 2px rgba(0,0,0,0.4)',
    md: '0 10px 30px rgba(0,0,0,0.45)',
    glow: '0 0 40px rgba(22,224,163,0.18)',
  },
  timing: {
    fast: '150ms',
    normal: '250ms',
    slow: '500ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  zIndex: {
    dropdown: 10,
    sticky: 20,
    modal: 30,
    toast: 50,
  },
  gradients: {
    heroOverlay: 'linear-gradient(135deg, #0e1116 0%, #11221f 100%)',
    ctaBlock: 'linear-gradient(120deg, #16e0a3 0%, #0c8f74 100%)',
  },
};

export type Brand = typeof brand;
