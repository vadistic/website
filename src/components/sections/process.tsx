import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

import { Img } from '..'
import { content } from '../../../data/content'
import { plainListStyles } from '../../styles'
import { Idx } from '../../utils'
import { Box, Grid, Heading, Paragraph } from '../grommet'
import { Section } from '../section'
import { ProcessSectionQuery } from './generated'

export interface ProcessSectionProps {}

export const ProcessSection: React.FunctionComponent<ProcessSectionProps> = () => (
  <StaticQuery<Idx<ProcessSectionQuery>> query={PROCESS_SECTION_QUERY}>
    {data => (
      <Section title={content.process.annotation}>
        <Grid columns={{ count: 2, size: 'auto' }} gap="medium">
          <ul css={plainListStyles}>
            {content.process.procesItems.map((item, i) => (
              <Box>
                <Heading size="small">
                  {i + 1}/ {item.title}
                </Heading>
                <Paragraph>{item.description}</Paragraph>
              </Box>
            ))}
          </ul>
        </Grid>
        <Img fluid={data.image.childImageSharp.fluid} />
      </Section>
    )}
  </StaticQuery>
)

export const PROCESS_SECTION_QUERY = graphql`
  query ProcessSectionQuery {
    image: file(relativePath: { eq: "images/placeholder.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...FluidImage
        }
      }
    }
  }
`
