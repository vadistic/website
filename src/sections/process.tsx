import { graphql, StaticQuery } from 'gatsby'
import { Box, Grid, Heading, Paragraph } from 'grommet'
import React from 'react'
import { Img, Section } from '../components'
import { content } from '../content'
import { ProcessSectionQuery } from '../generated'
import { useMedia } from '../styles'
import { Idx } from '../utils'

export interface ProcessSectionProps {}

export const ProcessSection: React.FunctionComponent<ProcessSectionProps> = () => {
  const media = useMedia()
  return (
    <StaticQuery<Idx<ProcessSectionQuery>> query={PROCESS_SECTION_QUERY}>
      {data => (
        <Section title={content.process.annotation}>
          <Grid
            fill="horizontal"
            columns={{ count: 'fit', size: media({ max: 'small' }) ? 'small' : 'medium' }}
            rows={['flex', 'flex', 'flex']}
            gap="medium"
          >
            {content.process.procesItems.map((item, i) => (
              <div>
                <Heading size="small">
                  {i + 1}/ {item.title}
                </Heading>
                <Paragraph>{item.description}</Paragraph>
              </div>
            ))}
          </Grid>
          <Box gridArea="image">
            <Img fluid={data.image.childImageSharp.fluid} />
          </Box>
        </Section>
      )}
    </StaticQuery>
  )
}

const PROCESS_SECTION_QUERY = graphql`
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
