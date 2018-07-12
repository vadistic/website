module.exports = {
  blogPostDir: 'content', // The name of directory that contains your posts.
  siteTitle: '.vadistic - Design & Development by Jakub Wadas', // Site title.
  siteTitleAlt: '.vadistic design & dev', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://vadistic.github.io', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: '', // Website description used for RSS feeds/meta description tag.
  siteRss: '', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'Jakub Wadas', // Username to display in the author segment.
  userMail: 'jakub.wadas@outlook.com',
  userLocation: 'Tricity, Poland', // User location to display in the author segment.
  userAvatar: 'img/profile-photo.png', // User avatar to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
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
  copyright: 'Copyright © 2018 Jakub Wadas', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}
