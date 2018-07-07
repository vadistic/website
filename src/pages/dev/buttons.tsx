import * as React from 'react'

import { Button, Grid, Mode, PageLayout } from '../../components'

const ButtonsPage = () => (
  <PageLayout>
    <Grid.Section altBackground>
      <Button>Primary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="text">Text</Button>
    </Grid.Section>
    <Mode mode={{ color: 'dark' }}>
      <Grid.Section altBackground>
        <Button>Primary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="text">Text</Button>
      </Grid.Section>
    </Mode>
  </PageLayout>
)

export default ButtonsPage
