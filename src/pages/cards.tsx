import * as React from 'react'

import { Card, Layout, Mode, Section, Text } from '../components'

const CardsPage = () => (
  <Layout>
    <Section>
      <div>
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
      </div>
    </Section>
    <Mode mode={{ color: 'dark' }}>
      <Section altBg>
        <div>
          <Card>
            <h3>Few important things</h3>
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
              <Text variant="h3">Few important things</Text>
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
        </div>
      </Section>
    </Mode>
  </Layout>
)

export default CardsPage
