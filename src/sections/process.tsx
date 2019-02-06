import { Box, Grid } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Section, SectionTitle } from '../components'
import { useMedia } from '../styles'

export interface ProcessSectionProps {}

export const ProcessSection: React.FunctionComponent<ProcessSectionProps> = () => {
  const { cond } = useMedia()
  return (
    <Section id="process">
      <SectionTitle>{sectionTitle}</SectionTitle>
      <Grid
        columns={{ size: cond({ only: 'small' }) ? 'auto' : 'medium', count: 'fit' }}
        gap="medium"
      >
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

const sectionTitle = 'Process 📝'

const ProcessMdxItem1 = mdx`
### Research first

Ok, the first point was easy. Research is important and googling is half of the job anyways.

`

const ProcessMdxItem2 = mdx`
### Get on the same side

_And this point is tricky_

It's essential to do deep needs evaluation and then agree on the project scope.
Clear communication is the key to victory.

`

const ProcessMdxItem3 = mdx`
### Prototype & Design

Yes, I can code it, but it's way faster to produce some mockups.
And even faster to just draw it.
Agile, but it won't hurt to try getting it right, from the start.
And let's explore great ideas before timeline brings us back to earth...

`

const ProcessMdxItem4 = mdx`
### Proper tech stack

Good tech choice can provide lot's of features out-of-the-box and help to
avoid crunching issues that do not add any end value. Also, who would like to work with poor tech choice?

`

const ProcessMdxItem5 = mdx`
### C.O.D.E

_Continous Orchestration of Development Endeavours(?)_

With honest hard work (and coffee)
the project will magically start to appear and bring happiness to all stakeholders.

`

const ProcessMdxItem6 = mdx`
### Finish, almost

The truth is that most projects can never finish entirely.
There always could be another iteration, improvements or linked idea to follow — well, so I'm ready to do it!

`

const processMdxItems = [
  ProcessMdxItem1,
  ProcessMdxItem2,
  ProcessMdxItem3,
  ProcessMdxItem4,
  ProcessMdxItem5,
  ProcessMdxItem6,
]
