import { navigate } from 'gatsby'
import { Box, Button } from 'grommet'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Section } from '../components'
import { PageTemplate } from '../templates'

const GoBackButton: React.FC = () => (
  <Box width="small" margin={{ vertical: 'large' }}>
    <Button
      plain={false}
      primary
      onClick={() => {
        navigate('/')
      }}
    >
      Go Back
    </Button>
  </Box>
)

export const NotFoundPage: React.FC = () => (
  <PageTemplate>
    <Section id="404">
      <NotFoundMdx />
      <GoBackButton />
    </Section>
  </PageTemplate>
)

export default NotFoundPage

const NotFoundMdx = mdx`

You just hit the route that does not exist.

It's kind of weird, since this webiste has only one page 😅

`
