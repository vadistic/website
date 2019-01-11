import { ReactComponent as DesignSvg } from '../assets/illustrations/design-alt.svg'
import { ReactComponent as DevelopmentSvg } from '../assets/illustrations/development-alt.svg'
import { ReactComponent as RealisationSvg } from '../assets/illustrations/realisation-alt.svg'

import { ReactComponent as CreativeCloudLogo } from '../assets/logos/creative-cloud.svg'
import { ReactComponent as EmotionLogo } from '../assets/logos/emotion.svg'
import { ReactComponent as FigmaLogo } from '../assets/logos/figma.svg'
import { ReactComponent as GatsbyLogo } from '../assets/logos/gatsby.svg'
import { ReactComponent as GraphqlLogo } from '../assets/logos/graphql.svg'
import { ReactComponent as IllustratorLogo } from '../assets/logos/illustrator.svg'
import { ReactComponent as IndesignLogo } from '../assets/logos/indesign.svg'
import { ReactComponent as JavascriptLogo } from '../assets/logos/javascript.svg'
import { ReactComponent as JestLogo } from '../assets/logos/jest.svg'
import { ReactComponent as NodeLogo } from '../assets/logos/node.svg'
import { ReactComponent as PhotoshopLogo } from '../assets/logos/photoshop.svg'
import { ReactComponent as PrismaLogo } from '../assets/logos/prisma.svg'
import { ReactComponent as ReactLogo } from '../assets/logos/react-js.svg'
import { ReactComponent as TypescriptLogo } from '../assets/logos/typescript.svg'
import { ReactComponent as WebpackLogo } from '../assets/logos/webpack.svg'

export const content = {
  hero: {
    title: 'I’m Jakub Wadas',
    heading: 'Front-end developer & designer with passion for bleeding-edge digital products',
  },
  about: {
    name: `Jakub Wadas`,
    title: `Front-end Developer & Designer`,
    description:
      'I focus on bridging the gap between design and implementation — combining design experience, fluency in bleeding-edge tech and ability to deliver buisness solutions',
  },
  services: {
    annotation: 'Skill Spectrum',
    items: [
      {
        Svg: DesignSvg,
        title: `Design`,
        description: 'Lorem pixum dolor amet',
        details: [
          { label: 'User Interfaces', value: 60 },
          { label: 'Branding', value: 80 },
          { label: 'Print', value: 40 },
        ],
      },
      {
        Svg: DevelopmentSvg,
        title: `Development`,
        description: 'Lorem pixum dolor amet',
        details: [
          { label: 'Static Websites', value: 80 },
          { label: 'Web Apps', value: 80 },
          { label: 'Design Systems', value: 60 },
        ],
      },
      {
        Svg: RealisationSvg,
        title: `Realisation`,
        description: 'Lorem pixum dolor amet',
        details: [
          { label: 'Project Management', value: 60 },
          { label: 'Product & UX', value: 40 },
          { label: 'Tech Recruitment', value: 80 },
        ],
      },
    ],
  },
  tech: {
    annotation: 'Prefered Stack',
    after: `Rather than only sticking to few favourites -\
      It's better to grab just the right tool for the job. \
      Beeing already familiar to countless of cool \
      libraries, tools & services\
      I'm flexible with adopting yet one another.`,
    techItems: {
      design: [
        {
          Logo: FigmaLogo,
          title: 'Figma',
          caption: 'colaborative user interface design tool',
          url: 'https://www.figma.com',
        },
        {
          Logo: CreativeCloudLogo,
          title: 'Adobe CC',
          caption: 'software and services for creatives from Adobe',
          url: '#',
        },
        {
          Logo: PhotoshopLogo,
          title: 'Photoshop',
          caption: 'photo, image, and design editing tool',
          url: '#',
        },
        {
          Logo: IllustratorLogo,
          title: 'Illustrator',
          caption: 'vector graphic design software',
          url: '#',
        },
        {
          Logo: IndesignLogo,
          title: 'InDesign',
          caption: 'Desktop publishing software',
          url: '#',
        },
      ],
      developement: [
        {
          Logo: JavascriptLogo,
          title: 'JavaScript',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: TypescriptLogo,
          title: 'TypeScript',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: GraphqlLogo,
          title: 'GraphQL',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: NodeLogo,
          title: 'NodeJS',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: ReactLogo,
          title: 'React',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: GatsbyLogo,
          title: 'Gatsby',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: PrismaLogo,
          title: 'Prisma',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: EmotionLogo,
          title: 'Emotion',
          caption: 'performant and flexible CSS-in-JS library',
          url: '#',
        },
        {
          Logo: WebpackLogo,
          title: 'Webpack',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: JestLogo,
          title: 'Jest',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
      ],
    },
  },
  process: {
    annotation: 'Process',
    procesItems: [
      {
        title: 'Research',
        description: 'Lorem pixum dolor amet',
      },
      {
        title: 'Research',
        description: 'Lorem pixum dolor amet',
      },
      {
        title: 'Research',
        description: 'Lorem pixum dolor amet',
      },
      {
        title: 'Research',
        description: 'Lorem pixum dolor amet',
      },
      {
        title: 'Research',
        description: 'Lorem pixum dolor amet',
      },
      {
        title: 'Research',
        description: 'Lorem pixum dolor amet',
      },
      {
        title: 'Research',
        description: 'Lorem pixum dolor amet',
      },
      {
        title: 'Research',
        description: 'Lorem pixum dolor amet',
      },
    ],
  },
  footer: {
    copyright: `Copyright © 2018 Jakub Wadas`,
  },
  lorem: {
    heading: `Sint pitchfork ramps nostrud normcore snackwave ut, meggings selfies`,
    paragraph: `Ex activated charcoal banjo selfies, deserunt four loko vice narwhal polaroid. Aliquip listicle you probably haven't heard of them everyday carry, hoodie sint 3 wolf moon magna austin deserunt dolore labore. Four dollar toast before they sold out quis, crucifix drinking vinegar kogi green juice ullamco asymmetrical. Id mixtape taxidermy flannel pariatur, nulla biodiesel shabby chic ugh craft beer street art et helvetica listicle aliquip.`,
  },
}
