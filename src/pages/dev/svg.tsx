import * as React from 'react'

import {
  Grid,
  IconRound,
  IllustrationSm,
  Logo,
  PageLayout,
  Text,
} from '../../components/index'

const SvgPage = () => (
  <PageLayout>
    <Grid.Section>
      <div>
        <Text variant="h4">Logos</Text>
        <Logo.CreativeCloud />
        <Text variant="h4">Illustrations</Text>
        <IllustrationSm.Design />
        <Text variant="h4">Icons</Text>
        <IconRound.Github />
      </div>
    </Grid.Section>
  </PageLayout>
)

export default SvgPage
