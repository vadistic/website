import * as React from 'react'

import { Card, Grid, Layout, Mode, Text } from '../components'

const CardsPage = () => (
  <Layout>
    <Grid.Section>
      <Text variant="h2">Cards demo</Text>
      <Text variant="h3">Components content</Text>

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
        </Card>
        <Mode mode={{ color: 'color' }}>
          <Card>
            <Text variant="h3">Lorem ipsum</Text>
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
          </Card>
        </Mode>
      </Grid.Section>
    </Mode>
  </Layout>
)

export default CardsPage
