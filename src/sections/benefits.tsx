import { Box } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Section } from '../components'

export interface BenefitsSectionProps {}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({}) => (
  <Section>
    <Box width="medium">
      <BenefitsMdx />
    </Box>
  </Section>
)

/*
 * CONTENT
 */

const BenefitsMdx = mdx`

  Modern apps, sleek design, impeccable personality.

`
