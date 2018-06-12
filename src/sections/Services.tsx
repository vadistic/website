import * as React from 'react'
import { css } from 'react-emotion'

import { Grid, Section, Typography } from '../components'
import data from './data'

interface ServiceItemProps {
  title: string
  variety: string[]
}

const listStyle = css`
  list-style: none;
  padding: 0;
`

const ServiceItem: React.SFC<ServiceItemProps> = ({
  children,
  title,
  variety,
}) => (
  <Grid.Item width={[3, 3, 1]} justifySelf={['start', 'start', 'center']}>
    <h3>{title}</h3>
    <ul className={listStyle}>
      {variety.map((service, i) => (
        <li key={i}>
          <h5>{service}</h5>
        </li>
      ))}
    </ul>
    <p>{children}</p>
  </Grid.Item>
)

export const ServicesSection: React.SFC<{}> = () => (
  <Section altBg id="services">
    <Grid.Container columns={3}>
      {data.services.servicesItems.map(service => (
        <Grid.Item width={[3, 3, 1]}>
          <Typography>
            <ServiceItem title={service.title} variety={service.variety}>
              {service.text}
            </ServiceItem>
          </Typography>
        </Grid.Item>
      ))}
    </Grid.Container>
  </Section>
)
