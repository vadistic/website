import { Box, Grid, Text } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Logos } from '../assets'
import { PlainAnchor, Section, SectionTitle, TooltipHost } from '../components'
import { useMedia } from '../styles'
import styled from '../styles/styled-components'

const Filter = styled.div`
  filter: grayscale();
  transition: all ${p => p.theme.global.animation.medium};

  &:hover {
    transition: all ${p => p.theme.global.animation.medium};
    filter: none;
    background-color: ${p => p.theme.global.colors.active};
  }
`

export const TechSection = () => {
  const { resp } = useMedia()
  return (
    <Section id="tech">
      <SectionTitle>{sectionTitle}</SectionTitle>
      <Box margin={{ bottom: 'medium' }}>
        <TechMdx />
      </Box>
      <Grid
        columns={{
          count: 'fill',
          size: resp({ small: 'xsmall', medium: 'small' }),
        }}
      >
        {Object.values(techItems).map(group =>
          group.map(item => (
            <PlainAnchor href={item.url} target="_blank">
              <TooltipHost render={<Text>{item.caption}</Text>}>
                <Filter>
                  <Box align="center" pad={{ vertical: 'medium' }}>
                    <Box width="50%">
                      <item.Logo viewBox="0 0 32 32" width="100%" height="100%" />
                    </Box>
                    <Text margin={{ top: 'small' }} textAlign="center">
                      {item.title}
                    </Text>
                  </Box>
                </Filter>
              </TooltipHost>
            </PlainAnchor>
          )),
        )}
      </Grid>
    </Section>
  )
}

/*
 * CONTENT
 */

const sectionTitle = 'Prefered stack 🎉'

const TechMdx = mdx`

Yet it's vital to choose the right tool for the job.
Beeing already familiar to myriad of cool libraries, tools & services
I'm quite flexible with adopting yet one another

`

const techItems = {
  design: [
    {
      Logo: Logos.Figma,
      title: `Figma`,
      caption: `Colaborative user interface design tool`,
      url: `https://www.figma.com`,
    },
    {
      Logo: Logos.CreativeCloud,
      title: `Adobe CC`,
      caption: `Software and services for creatives from Adobe`,
      url: `https://www.adobe.com/creativecloud.html`,
    },
    {
      Logo: Logos.Photoshop,
      title: `Photoshop`,
      caption: `Image and design editing software`,
      url: `https://www.adobe.com/products/photoshop.html`,
    },
    {
      Logo: Logos.Illustrator,
      title: `Illustrator`,
      caption: `Vector graphic design software`,
      url: `https://www.adobe.com/products/illustrator.html`,
    },
    {
      Logo: Logos.Indesign,
      title: `InDesign`,
      caption: `Print & publishing software`,
      url: `https://www.adobe.com/products/indesign.html`,
    },
  ],
  frontend: [
    {
      Logo: Logos.Javascript,
      title: `JavaScript`,
      caption: `Language of the web`,
      url: `https://github.com/tc39`,
    },
    {
      Logo: Logos.Typescript,
      title: `TypeScript`,
      caption: `Typesafe superset of JavaScript for scalable applications`,
      url: `https://www.typescriptlang.org`,
    },
    {
      Logo: Logos.Graphql,
      title: `GraphQL`,
      caption: `Data query language and ecosystem for efficient APIs and Apps`,
      url: `https://graphql.org`,
    },

    {
      Logo: Logos.React,
      title: `React`,
      caption: `Framework and ecosystem for building user interfaces`,
      url: `https://reactjs.org`,
    },
    {
      Logo: Logos.Gatsby,
      title: `Gatsby`,
      caption: `Static site generator powered by react & graphQL`,
      url: `https://www.gatsbyjs.org`,
    },

    {
      Logo: Logos.Emotion,
      title: `Emotion`,
      caption: `Performant and flexible CSS-in-JS library`,
      url: `https://emotion.sh/`,
    },
    {
      Logo: Logos.Webpack,
      title: `Webpack`,
      caption: `Transforming, bundling and packaging tool`,
      url: `https://webpack.js.org/#click_on_your_own_responsibility`,
    },
    {
      Logo: Logos.Jest,
      title: `Jest`,
      caption: `Industry-standard testing framework`,
      url: `https://jestjs.io`,
    },
  ],
  backend: [
    {
      Logo: Logos.Node,
      title: `NodeJS`,
      caption: `Cross-platform, server-side JavaScript run-time`,
      url: `https://nodejs.org`,
    },
    {
      Logo: Logos.Prisma,
      title: `Prisma`,
      caption: `GraphQL data access layer replacing traditional ORMs`,
      url: `https://www.prisma.io`,
    },
    {
      Logo: Logos.Docker,
      title: `Docker`,
      caption: `Container deployment`,
      url: `https://www.docker.com`,
    },
    {
      Logo: Logos.Zeit,
      title: `Zeit Now`,
      caption: `Rapid serverless deployments`,
      url: `https://zeit.co/now`,
    },
    {
      Logo: Logos.Aws,
      title: `AWS`,
      caption: `Vast and scalable cloud services`,
      url: `https://aws.amazon.com`,
    },
    {
      Logo: Logos.Netlify,
      title: `Netlify`,
      caption: `Effective static web deployments`,
      url: `https://www.netlify.com`,
    },
  ],
}
