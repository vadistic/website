module.exports = {
  siteMetadata: {
    title: 'Vadistic - Front-end developement & Design by Jakub Wadas',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-emotion`,
    'gatsby-plugin-typescript',
  ],
}
