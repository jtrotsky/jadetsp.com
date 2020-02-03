export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
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
    green: '#525237',
    yellow: '#ED9A12',
    clay: '#AE4F2B',
    tan: '#C07B2E',
    peach: '#C68B6E',
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
      fontSize: 24,
      lineHeight: '40px',
      letterSpacing: 0,
      fontWeight: 600,
    },
    signPost: {
      fontFamily: 'Nunito',
      fontSize: 14,
      lineHeight: '26px',
      letterSpacing: 2,
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    hardCaption: {
      fontFamily: 'Nunito',
      fontSize: 16,
      lineHeight: '26px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    softCaption: {
      fontFamily: 'Nunito',
      fontSize: 16,
      lineHeight: '22px',
      letterSpacing: 0,
      fontWeight: 300,
      fontStyle: 'italic',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.bigBoi',
      fontSize: 4,
    },
    h2: {
      variant: 'text.chooChooBoi',
      fontSize: 4,
    },
    h3: {
      variant: 'text.pugBoi',
      fontSize: 3,
    },
    h4: {
      variant: 'text.smolBoi',
      fontSize: 2,
    },
    h5: {
      variant: 'text.pocketBoi',
      fontSize: 2,
    },
    h6: {
      variant: 'text.signPost',
      fontSize: 0,
    },
    hardCaption: {
      variant: 'text.hardCaption',
      fontSize: 1,
    },
    softCaption: {
      variant: 'text.softCaption',
      fontSize: 1,
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
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};
