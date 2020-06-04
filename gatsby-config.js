const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Muhammad Ali',
    siteUrl: 'https://muhammadali.io',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'static', 'images'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Muhammad Ali`,
        short_name: `Muhammad Ali`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-flow',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
  ],
}
