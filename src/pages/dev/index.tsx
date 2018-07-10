import { Link } from 'gatsby'
import * as React from 'react'

import { Box, Grid, PageLayout, Text } from '../../components/index'

const DevPage: React.SFC<{}> = () => (
  <PageLayout>
    <Grid.Section>
      <Box>
        <Text variant="h2">Developement menu</Text>
        <nav id="dev-nav">
          <ul>
            <li>
              <Link to="/dev/typography">Typography</Link>
            </li>
            <li>
              <Link to="/dev/grid">Grid</Link>
            </li>
            <li>
              <Link to="/dev/cards">Cards</Link>
            </li>
            <li>
              <Link to="/dev/layouts">Layouts</Link>
            </li>
          </ul>
        </nav>
      </Box>
    </Grid.Section>
  </PageLayout>
)

export default DevPage
