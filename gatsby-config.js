const path = require('path');

module.exports = {
  siteMetadata: {
    title: `I lead product design teams to collaborate and thrive, 
      by helping designers grow into empathetic leaders and allies.`,
    description: 'I lead product design teams',
    author: 'Jade Tan',
    statusUpdate: `What's next: My partner and I are relocating to London, 
      and I’m looking for a new team to create magic with. `,
    quote: `"Some quote about me being really good at this and that. Will recommend for all 
      eternity."`,
    attribution: '-Said by a nice person I worked with',
    medium: 'https://medium.com/@jadetsp',
    dribbble: 'https://dribbble.com/jadetsp',
    twitter: 'https://twitter.com/jadetsssp',
    linkedin: 'https://www.linkedin.com/in/jadetsp',
  },
  plugins: [
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, 'src', 'data'),
      },
    },
    'gatsby-background-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        maxWidth: 1000,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Jade Tan's Portfolio",
        start_url: '/',
        display: 'minimal-ui',
        icon: path.join(__dirname, 'static', 'favicon', 'favicon-32x32.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/'],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Serif SC:600', 'Nunito:400,600,700'],
        },
      },
    },
  ],
  mapping: {
    socials: 'SocialsYaml',
    quotes: 'QuotesYaml',
    media: 'MediaYaml',
  },
};
