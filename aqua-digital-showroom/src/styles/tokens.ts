export const DESIGN_TOKENS = {
  colors: {
    primaryBlack: '#111111',
    white: '#FFFFFF',
    background: '#F7F7F7',
    surface: '#EEEEEE',
    secondaryText: '#6B6B6B',
    border: '#E5E5E5',
    aquaBlue: '#0066B3',
    aquaBlueHover: '#005291',
    aquaBlueSubtle: '#F0F7FC',
    whatsappGreen: '#168A4A',
    whatsappGreenHover: '#12703C',
  },
  typography: {
    fontFamily: 'var(--font-plus-jakarta), system-ui, -apple-system, sans-serif',
    scale: {
      hero: 'clamp(2rem, 4vw, 3.25rem)',
      h2: 'clamp(1.5rem, 2.5vw, 2.25rem)',
      h3: '1.125rem',
      body: '1rem',
      small: '0.875rem',
      caption: '0.75rem',
    },
  },
  buttonHeight: {
    sm: '38px',
    md: '44px',
    lg: '50px',
  },
  radius: {
    none: '0px',
    sm: '4px',
    md: '8px',
    full: '9999px',
  },
  shadow: {
    none: 'none',
    subtle: '0 4px 20px -2px rgba(17, 17, 17, 0.06)',
  },
  container: {
    maxWidth: '1280px',
  },
  breakpoints: {
    mobileSmall: '360px',
    mobileStandard: '390px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
  },
} as const;
