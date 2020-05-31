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
    'gatsby-plugin-flow',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
  ],
}
