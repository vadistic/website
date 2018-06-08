import * as React from 'react'

import { Grid, Section, Text } from '../components'

import data from './data'

interface ServiceItemProps {
  title: string
  variety: string[]
}

const ServiceItem: React.SFC<ServiceItemProps> = ({
  children,
  title,
  variety,
}) => (
  <Grid.Item width={[3, 3, 1]} justifySelf={['start', 'start', 'center']}>
    <Text variant="heading">{title}</Text>
    <ul>
      {variety.map(service => (
        <li>
          <Text variant="subheading">{service}</Text>
        </li>
      ))}
    </ul>
    <Text variant="body">{children}</Text>
  </Grid.Item>
)

export const ServicesSection: React.SFC<{}> = () => (
  <Section altBg annotation="Skill spectrum">
    <Grid.Container columns={3}>
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
