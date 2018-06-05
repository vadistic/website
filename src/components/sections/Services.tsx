import * as React from 'react'

import { Grid, Heading, Section, Text, Ul } from '../'

import data from './data'

interface ServiceItemProps {
  title: string
  variety: string[]
}

const ServiceItem: React.SFC<ServiceItemProps> = ({ children, title, variety }) => (
  <Grid.Item width={[3, 3, 1]} justifySelf={['start', 'start', 'center']}>
    <Heading variant="heading">{title}</Heading>
    <Ul noStyle>
      {variety.map(service => (
        <li>
          <Heading variant="subheading">{service}</Heading>
        </li>
      ))}
    </Ul>
    <Text paragraph>{children}</Text>
  </Grid.Item>
)

export const ServicesSection: React.SFC<{}> = () => (
  <Section alternativeBg>
    <Heading variant="annotation">Skill spectrum</Heading>
    <Grid.Container columns={`repeat(auto-fill, minmax(min-content, 1fr))`} height="100%" alignItems="center" gap={[32, 32, 32, 32, 48]}>
      {data.services.servicesItems.map(service => (
        <Grid.Item width={1}>
          <ServiceItem title={service.title} variety={service.variety}>
            {service.text}
          </ServiceItem>
        </Grid.Item>
      ))}
    </Grid.Container>
  </Section>
)
