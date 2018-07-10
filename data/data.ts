import illustrations from './img/illustrations/index'
import logos from './img/logos/index'
import config from './SiteConfig'

const data = {
  hero: {
    title: 'I’m Jakub Wadas',
    heading:
      'Front-end developer & designer with passion for bleeding-edge digital products',
  },
  about: {
    name: `Jakub Wadas`,
    title: `Front-end Developer & Designer`,
    description:
      'I focus on bridging the gap between design and implementation — combining design experience, fluency in bleeding-edge tech and ability to deliver buisness solutions',
  },
  services: {
    annotation: 'Skill Spectrum',
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
  },
  tech: {
    annotation: 'Prefered Stack',
    techItems: logos,
  },
  process: {
    annotation: 'Process',
    procesItems: [
      {
        title: '',
        description: '',
      },
    ],
  },
  lorem: {
    title: `Sint pitchfork ramps nostrud normcore`,
    headline: `Sint pitchfork ramps nostrud normcore snackwave ut, meggings selfies`,
    paragraph: `Ex activated charcoal banjo selfies, deserunt four loko vice narwhal polaroid. Aliquip listicle you probably haven't heard of them everyday carry, hoodie sint 3 wolf moon magna austin deserunt dolore labore. Four dollar toast before they sold out quis, crucifix drinking vinegar kogi green juice ullamco asymmetrical. Id mixtape taxidermy flannel pariatur, nulla biodiesel shabby chic ugh craft beer street art et helvetica listicle aliquip.`,
  },
}

export default data
