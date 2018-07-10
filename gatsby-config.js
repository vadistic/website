require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = require('./data/SiteConfig')

const URL = require('url').URL

module.exports = {
  siteMetadata: {
    title: 'Vadistic - Front-end developement & Design by Jakub Wadas',
    siteUrl: new URL(config.pathPrefix, config.siteUrl).href,
    rssMetadata: {
      site_url: new URL(config.pathPrefix, config.siteUrl).href,
      feed_url: new URL(config.pathPrefix, config.siteUrl, config.siteRss).href,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: new URL(config.pathPrefix, config.siteUrl, config.siteLogo)
        .href,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: 'vadistic',

        // An API access token to your prismic.io repository. This is required.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        accessToken: `${process.env.PRISMIC_API_TOKEN}`,

        // Set a link resolver function used to process links in your content.
        // Fields with rich text formatting or links to internal content use this
        // function to generate the correct link URL.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different link resolver logic for each field if necessary.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving

        /*         linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        }, */

        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer

        /*         htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // Your HTML serializer
        }, */
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/`,
        name: 'data',
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
}
