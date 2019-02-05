require('./scripts/env-config').configure()

const path = require('path')
const siteConfig = require('./site-config')

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.title,
        short_name: siteConfig.shortTitle,
        start_url: `/`,
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.brandColor,
        display: `browser`,
        icon: siteConfig.icons,
        include_favicon: true,
      },
    },
    {
      resolve: 'gatsby-mdx',
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: false, // use svgo to optimize SVGs (default)
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.resolve('./src/posts/'),
        ignore: ['**/.{ts,tsx}*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sections',
        path: path.resolve('./src/sections/'),
        ignore: ['**/.{ts,tsx}*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve('./src/pages/'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: path.resolve('./src/assets/'),
      },
    },
  ],
}
