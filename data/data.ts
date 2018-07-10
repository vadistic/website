import illustrations from './img/illustrations'
import logos from './img/logos'
import config from './SiteConfig'

const data = {
  hero: {
    title: 'I’m Jakub Wadas',
    heading:
      'Front-end developer & designer with passion for bleeding-edge digital products',
  },
  about: {
    annotation: `Hello, I'm Jakub`,
    headline: `I'm front-end developer and designer based in Tricity, Poland`,
    text:
      'The packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove.',
  },
  services: {
    serviceItems: [
      {
        svg: illustrations.design,
        title: `Design`,
        description: 'Lorem pixum dolor amet',
        list: ['User Interfaces', 'Branding', 'Print'],
      },
      {
        svg: illustrations.development,
        title: `Development`,
        description: 'Lorem pixum dolor amet',
        list: ['Static Websites', 'Web Apps', 'Design Systems'],
      },
      {
        svg: illustrations.realization,
        title: `Realization`,
        description: 'Lorem pixum dolor amet',
        list: ['Project Management', 'Product & UX', 'Tech Recruitment'],
      },
    ],
    techItems: logos,
  },
  lorem: {
    title: `Sint pitchfork ramps nostrud normcore`,
    headline: `Sint pitchfork ramps nostrud normcore snackwave ut, meggings selfies`,
    paragraph: `Ex activated charcoal banjo selfies, deserunt four loko vice narwhal polaroid. Aliquip listicle you probably haven't heard of them everyday carry, hoodie sint 3 wolf moon magna austin deserunt dolore labore. Four dollar toast before they sold out quis, crucifix drinking vinegar kogi green juice ullamco asymmetrical. Id mixtape taxidermy flannel pariatur, nulla biodiesel shabby chic ugh craft beer street art et helvetica listicle aliquip.`,
  },
}

export default data
