import { Box, Grid } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Section } from '../components'
import { useMedia } from '../styles'

export interface ProcessSectionProps {}

export const ProcessSection: React.FunctionComponent<ProcessSectionProps> = () => {
  const { resp } = useMedia()
  return (
    <Section title={sectionTitle}>
      <Grid columns={{ size: 'medium', count: 'fit' }} gap="medium">
        {processMdxItems.map(MdxItem => (
          <Box>
            <MdxItem />
          </Box>
        ))}
      </Grid>
    </Section>
  )
}

/*
 * CONTENT
 */

const sectionTitle = 'Process'

const ProcessMdxItem1 = mdx`
### Research first
Lorem pixum dolor amet. Lorem pixum dolor amet.
Lorem pixum dolor amet. Lorem pixum dolor amet. Lorem pixum dolor amet.
`

const ProcessMdxItem2 = mdx`
### Another step

Lorem pixum dolor amet.
Lorem pixum dolor amet. Lorem pixum dolor amet.
Lorem pixum dolor amet. Lorem pixum dolor amet.
`

const ProcessMdxItem3 = mdx`
### Almost done

Lorem pixum dolor amet.
Lorem pixum dolor amet. Lorem pixum dolor amet.
Lorem pixum dolor amet. Lorem pixum dolor amet.
`

const ProcessMdxItem4 = mdx`
### Final placeholder!

Lorem pixum dolor amet.
Lorem pixum dolor amet. Lorem pixum dolor amet.
Lorem pixum dolor amet. Lorem pixum dolor amet.
`

const processMdxItems = [ProcessMdxItem1, ProcessMdxItem2, ProcessMdxItem3, ProcessMdxItem4]
