import { Box, Grid } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Section, SectionTitle } from '../components'

export interface ProcessSectionProps {}

export const ProcessSection: React.FunctionComponent<ProcessSectionProps> = () => {
  return (
    <Section id="process">
      <SectionTitle>{sectionTitle}</SectionTitle>
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

Ok, the first point was easy. And googling is half of the job anyways.

`

const ProcessMdxItem2 = mdx`
### Get on the same side

(And this point is always difficult.) _It's essential_ to do deep needs evaluation and only then agree on project scope.
It's fair, it's reasonable, and everybody can get the most bang for the buck.

`

const ProcessMdxItem3 = mdx`
### Prototype & Design

Yes, I can code it, but it's way faster to produce some mockups.
And even faster to just draw it.
Of course, agile, but it won't hurt to try understanding features right from the start.
And let's explore great ideas before timeline brings us back to earth...

`

const ProcessMdxItem4 = mdx`
### Proper tech stack

Good tech choice can provide lot's of features out-of-the-box and help to
avoid crunching issues that do not add any end value. Also, who would like to work with poor tech choice?

`

const ProcessMdxItem5 = mdx`
### C.O.D.E

During Continous Orchestration of Development Endeavour, with honest hard work (and coffee)
the project will magically start to function to bring happiness to all stakeholders.

`

const ProcessMdxItem6 = mdx`
### Almost, finish

The hard truth is that most projects never finish entirely.
There always could be another iteration, improvements or linked idea to follow so I'm ready to do it!

`

const processMdxItems = [
  ProcessMdxItem1,
  ProcessMdxItem2,
  ProcessMdxItem3,
  ProcessMdxItem4,
  ProcessMdxItem5,
  ProcessMdxItem6,
]
