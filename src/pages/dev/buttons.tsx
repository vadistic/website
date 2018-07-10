import * as React from 'react'

import { Button, Grid, Mode, PageLayout } from '../../components/index'

const ButtonsPage = () => (
  <PageLayout>
    <Grid.Section>
      <Button>Primary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="text">Text</Button>
    </Grid.Section>
    <Mode mode={{ color: 'dark' }}>
      <Grid.Section>
        <Button>Primary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="text">Text</Button>
      </Grid.Section>
    </Mode>
  </PageLayout>
)

export default ButtonsPage
