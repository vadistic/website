import { Box } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { SectionTitle, Spacer } from '../components'

export interface BenefitsSectionProps {}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({}) => (
  <section>
    <Spacer>
      <SectionTitle title={sectionTitle} />
      <Box>
        <BenefitsMdx />
      </Box>
    </Spacer>
  </section>
)

/*
 * CONTENT
 */

const sectionTitle = `Vision`

const BenefitsMdx = mdx`

  Modern apps, sleek design, impeccable personality.

`
