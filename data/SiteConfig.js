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
  userLocation: 'Tricity, Poland', // User location to display in the author segment.
  userAvatar: 'img/profile-photo.png', // User avatar to display in the author segment.
  userDescription:
    'I focus on bridging the gap between design and implementation - combining design experience, fluency in bleeding-edge tech and ability to deliver buisness solutions.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      iconName: 'mail',
      label: 'Mail',
      content: 'jakub.wadas@outlook.com',
      url: 'mailto:jakub.wadas@outlook.com',
    },
    {
      iconName: 'skype',
      label: 'Skype',
      content: 'check',
      url: 'skype:jakub.wadas',
    },
    {
      iconName: 'linkedin',
      label: 'LinkedIn',
      content: 'jakubwadas',
      url: 'https://www.linkedin.com/in/jakubwadas',
    },
    {
      iconName: 'behance',
      label: 'Behance',
      content: 'vadistic',
      url: 'https://behance.net/vadistic',
    },
    {
      iconName: 'github',
      label: 'GitHub',
      content: 'vadistic',
      url: 'https://github.com/vadistic',
    },
  ],
  copyright: 'Copyright © 2018 Jakub Wadas', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}
