import * as React from 'react'

import { Box, Card, Grid, Mode, PageLayout, Text, Typography } from '../../components'

const CardsPage = () => (
  <PageLayout>
    <Grid.Section>
      <Box>
        <Text variant="h2">Cards demo</Text>
        <Text variant="h3">Components content</Text>
      </Box>
      <Card>
        <Text variant="h3">Card header</Text>
        <Text variant="h5">Card subheader</Text>
        <Text variant="p">Card body paragraph text and stuff like that.</Text>
      </Card>
      <Card>
        <Text variant="h3">Card header</Text>
        <Text variant="h5">Card subheader</Text>
        <Text variant="p">Card body paragraph text and stuff like that.</Text>
      </Card>
    </Grid.Section>
    <Mode mode={{ color: 'dark' }}>
      <Grid.Section altBackground>
        <Text variant="h2">Dark + Color mode</Text>
        <Card>
          <Typography>
            <h3>Content as html</h3>
            <ul>
              <li>
                <h5>This</h5>
              </li>
              <li>
                <h5>That</h5>
              </li>
              <li>
                <h5>And those?</h5>
              </li>
            </ul>
            <p> Let's talk more about this</p>
          </Typography>
        </Card>
        <Mode mode={{ color: 'color' }}>
          <Card>
            <Typography>
              <h3>Lorem ipsum</h3>
              <ul>
                <li>
                  <h5>This</h5>
                </li>
                <li>
                  <h5>That</h5>
                </li>
                <li>
                  <h5>And those?</h5>
                </li>
              </ul>
              <p> Let's talk more about this</p>
            </Typography>
          </Card>
        </Mode>
      </Grid.Section>
    </Mode>
  </PageLayout>
)

export default CardsPage
