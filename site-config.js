module.exports = {
  // site
  title: '.vadistic - Design & Development by Jakub Wadas',
  titleAlt: '.vadistic design & dev',
  logo: '', // Logo used for SEO and manifest.
  url: 'https://vadistic.github.io', // Domain of your website without pathPrefix.
  description: '', // Website description used for RSS feeds/meta description tag.
  keywords: '',

  rss: '', // Path to the RSS file.
  fbAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.

  // author
  name: 'Jakub Wadas',
  mail: 'jakub.wadas@outlook.com',
  links: [
    {
      iconName: 'Mail',
      label: 'Mail',
      caption: 'jakub.wadas@outlook.com',
      url: 'mailto:jakub.wadas@outlook.com',
    },
    {
      iconName: 'Skype',
      label: 'Skype',
      caption: 'vadistic',
      url: 'skype:vadistic?chat',
    },
    {
      iconName: 'Linkedin',
      label: 'LinkedIn',
      caption: 'jakubwadas',
      url: 'https://www.linkedin.com/in/jakubwadas',
    },
    {
      iconName: 'Behance',
      label: 'Behance',
      caption: 'vadistic',
      url: 'https://behance.net/vadistic',
    },
    {
      iconName: 'Github',
      label: 'GitHub',
      caption: 'vadistic',
      url: 'https://github.com/vadistic',
    },
  ],

  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  postDefaultCategoryID: 'Tech', // Default category for posts.

  // theme
  font: '', // Roboto
  fontHeadings: '', // Merriweather
  brandColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.

  copyright: 'Copyright © 2018 Jakub Wadas', // Copyright string for the footer of the website and RSS feed.
}
