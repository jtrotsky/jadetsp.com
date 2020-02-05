module.exports = {
  siteMetadata: {
    title: `I lead product design teams to collaborate and thrive, 
      by helping designers grow into empathetic leaders and allies.`,
    description: 'Jade\'s Portfolio',
    author: 'Jade Tan',
    statusUpdate: `Right now: My partner and I are relocating to London, 
      and I’m looking for a new team to create magic with. `,
    quote: `"Some quote about me being really good at this and that. Will recommend for all 
      eternity."`,
    attribution: '-Said by a nice person I worked with',
    medium: 'https://medium.com/@JadeTSP',
    dribbble: 'https://dribbble.com/JadeTSP',
    twitter: 'https://twitter.com/jadetsssp',
  },
  plugins: [
    // For markdown files
    // `gatsby-plugin-mdx`,
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        start_url: '/',
        display: 'minimal-ui',
        icon: './static/favicon/favicon-32x32.png',
      },
    },
    // Test this is working
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/'],
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Noto Serif SC',
            variants: ['600'],
          },
          {
            family: 'Nunito',
            variants: ['600', '300'],
          },
        ],
      },
    },
  ],
};
