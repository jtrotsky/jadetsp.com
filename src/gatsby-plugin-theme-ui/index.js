export default {
  breakpoints: ['0px', '768px', '768px'],
  space: [32, 40, 80, 120, 160, 200, 280, 360, 400],
  layout: {
    container: {
      maxWidth: '1000px',
    },
  },
  fonts: {
    body: '"Noto Serif Semibold", "Nunito Semi Bold", "Nunito Light Italic", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
    heading: 'Noto Serif Semibold',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [14, 16, 24, 40, 60],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#132640',
    background: '#F7F8F8',
    night: '#1B2130',
    yellow: '#ED9A12',
    plum: '#763248',
    tan: '#B1836F',
  },
  text: {
    bigBoi: {
      fontFamily: 'Noto Serif SC',
      fontSize: 60,
      lineHeight: '80px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    chooChooBoi: {
      fontFamily: 'Noto Serif SC',
      fontSize: 40,
      lineHeight: '80px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    pugBoi: {
      fontFamily: 'Noto Serif SC',
      fontSize: 32,
      lineHeight: '60px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    smolBoi: {
      fontFamily: 'Noto Serif SC',
      fontSize: 24,
      lineHeight: '40px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    pocketBoi: {
      fontFamily: 'Nunito',
      fontSize: 20,
      lineHeight: '40px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    signPost: {
      fontFamily: 'Nunito',
      fontSize: 14,
      lineHeight: '26px',
      letterSpacing: 2,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    hardCaption: {
      fontFamily: 'Nunito',
      fontSize: 14,
      lineHeight: '26px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    softCaption: {
      fontFamily: 'Nunito',
      fontSize: 16,
      lineHeight: '22px',
      letterSpacing: 0,
      fontWeight: 600,
      fontStyle: 'italic',
    },
  },
  styles: {
    root: {
      margin: '0 0 0 0',
      padding: '0 0 0 0',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.bigBoi',
    },
    h2: {
      variant: 'text.chooChooBoi',
    },
    h3: {
      variant: 'text.pugBoi',
    },
    h4: {
      variant: 'text.smolBoi',
    },
    h5: {
      variant: 'text.pocketBoi',
    },
    h6: {
      variant: 'text.signPost',
    },
    hardCaption: {
      variant: 'text.hardCaption',
    },
    softCaption: {
      variant: 'text.softCaption',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    a: {
      cursor: 'pointer',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
};
