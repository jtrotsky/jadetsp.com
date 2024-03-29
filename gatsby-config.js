const path = require('path');

module.exports = {
  siteMetadata: {
    title: `I lead product design teams to collaborate and thrive, 
    by helping designers grow into empathetic leaders and allies.`,
    description: 'I lead product design teams',
    author: 'Jade Tan',
    statusUpdate: `What's next: My partner and I are relocating to London, 
    and I’m looking for a new team to create magic with. `,
    medium: 'https://medium.com/@jadetsp',
    dribbble: 'https://dribbble.com/jadetsp',
    twitter: 'https://twitter.com/jadetsssp',
    linkedin: 'https://www.linkedin.com/in/jadetsp',
    siteUrl: 'https://www.jadetsp.com',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Jade's Portfolio",
        short_name: "Jade's Portfolio",
        description: 'A bit about Jade and her work.',
        lang: 'en',
        start_url: '.',
        display: 'minimal-ui',
        background_color: '#F7F8F8',
        theme_color: '#ED9A12',
        icon: path.join(__dirname, 'static', 'favicons', 'maskable_icon_x512.png'),
        icons: [
          {
            src: path.join(__dirname, 'static', 'favicons', 'favicon_x512.png'),
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: path.join(__dirname, 'static', 'favicons', 'maskable_icon_x512.png'),
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ]
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -20,
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
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
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
        }
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/'],
      },
    },
  ],
  mapping: {
    socials: 'SocialsYaml',
    quotes: 'QuotesYaml',
    media: 'MediaYaml',
  },
};
