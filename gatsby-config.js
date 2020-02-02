module.exports = {
  siteMetadata: {
    title: `I lead product design teams to collaborate and thrive, 
      by helping designers grow into empathetic leaders and allies.`,
    description:  `Jade's Portfolio`,
    author: `Jade Tan`,
    statusUpdate: `Right now: My partner and I are relocating to London, 
      and I’m looking for a new team to create magic with.`
  },
  plugins: [
    // For markdown files 
    `gatsby-plugin-mdx`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Can I remove this?
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/favicon/favicon.png`,
      },
    },
    // Test this is working
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Serif SC`,
            variants: [`600`]
          },
          {
            family: `Nunito`,
            variants: [`600`, `300`]
          },
        ],
      },
    }
  ],
}
