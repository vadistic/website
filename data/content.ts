import * as Illustrations from '../assets/illustrations'
import * as Logos from '../assets/logos'

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
        Svg: Illustrations.DesignAlt,
        title: `Design`,
        description: 'Lorem pixum dolor amet',
        details: [
          { label: 'User Interfaces', value: 60 },
          { label: 'Branding', value: 80 },
          { label: 'Print', value: 40 },
        ],
      },
      {
        Svg: Illustrations.DevelopmentAlt,
        title: `Development`,
        description: 'Lorem pixum dolor amet',
        details: [
          { label: 'Static Websites', value: 80 },
          { label: 'Web Apps', value: 80 },
          { label: 'Design Systems', value: 60 },
        ],
      },
      {
        Svg: Illustrations.RealisationAlt,
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
    after: `I love this tech, but it's vital to choose the right tool for the job. \
      Beeing already familiar to myriad of cool libraries, tools & services\
      I'm flexible with adopting yet one another.`,
    techGroup: {
      design: [
        {
          Logo: Logos.Figma,
          title: 'Figma',
          caption: 'colaborative user interface design tool',
          url: 'https://www.figma.com',
        },
        {
          Logo: Logos.CreativeCloud,
          title: 'Adobe CC',
          caption: 'software and services for creatives from Adobe',
          url: '#',
        },
        {
          Logo: Logos.Photoshop,
          title: 'Photoshop',
          caption: 'photo, image, and design editing tool',
          url: '#',
        },
        {
          Logo: Logos.Illustrator,
          title: 'Illustrator',
          caption: 'vector graphic design software',
          url: '#',
        },
        {
          Logo: Logos.Indesign,
          title: 'InDesign',
          caption: 'Desktop publishing software',
          url: '#',
        },
      ],
      frontend: [
        {
          Logo: Logos.Javascript,
          title: 'JavaScript',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: Logos.Typescript,
          title: 'TypeScript',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: Logos.Graphql,
          title: 'GraphQL',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },

        {
          Logo: Logos.React,
          title: 'React',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: Logos.Gatsby,
          title: 'Gatsby',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },

        {
          Logo: Logos.Emotion,
          title: 'Emotion',
          caption: 'performant and flexible CSS-in-JS library',
          url: '#',
        },
        {
          Logo: Logos.Webpack,
          title: 'Webpack',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: Logos.Jest,
          title: 'Jest',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
      ],
      backend: [
        {
          Logo: Logos.Node,
          title: 'NodeJS',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: Logos.Prisma,
          title: 'Prisma',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: Logos.Docker,
          title: 'Docker',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: Logos.Aws,
          title: 'AWS',
          caption: 'Lorem pixum dolor amet',
          url: '#',
        },
        {
          Logo: Logos.Netlify,
          title: 'Netlify',
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
        description: 'Lorem pixum dolor amet. Lorem pixum dolor amet.',
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
    copyright: `Copyright © 2019 Jakub Wadas`,
  },
  lorem: {
    heading: `Sint pitchfork ramps nostrud normcore snackwave ut, meggings selfies`,
    paragraph: `Ex activated charcoal banjo selfies, deserunt four loko vice narwhal polaroid. Aliquip listicle you probably haven't heard of them everyday carry, hoodie sint 3 wolf moon magna austin deserunt dolore labore. Four dollar toast before they sold out quis, crucifix drinking vinegar kogi green juice ullamco asymmetrical. Id mixtape taxidermy flannel pariatur, nulla biodiesel shabby chic ugh craft beer street art et helvetica listicle aliquip.`,
  },
}
