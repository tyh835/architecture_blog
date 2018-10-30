module.exports = {
  siteMetadata: {
    title: 'Architecture Blog'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Architecture Blog',
        short_name: 'ArchBlog',
        start_url: '/',
        background_color: '#FEFEFE',
        theme_color: '#FEFEFE',
        display: 'minimal-ui',
        icon: `${__dirname}/src/images/gatsby-icon.png`
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ],
}
