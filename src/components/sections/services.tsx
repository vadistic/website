import { Box, Grid, Image, Paragraph, Text } from 'grommet'
import * as React from 'react'

import { Card, Section } from '..'
import { content } from '../../../data/content'
import styled from '../../styles/styled-components'

export const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
`

export const ServicesSection = () => (
  <Section title={content.services.annotation}>
    <Grid columns={'medium'} gap="medium">
      {content.services.serviceItems.map(card => (
        <Card>
          <Box width="66%">
            <Image src={card.svg} fit="contain" />
          </Box>
          <Text size="large" color="brand">
            {card.title}
          </Text>
          <Paragraph>{card.description}</Paragraph>
          <ServicesList>
            {card.list.map(service => (
              <li>
                <Text weight="bold">{service}</Text>
              </li>
            ))}
          </ServicesList>
        </Card>
      ))}
    </Grid>
  </Section>
)
