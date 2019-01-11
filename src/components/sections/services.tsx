import { Box, Grid, Meter, Paragraph, Text } from 'grommet'
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
      {content.services.items.map(card => (
        <Card>
          <Box margin={{ vertical: 'medium' }}>
            <card.Svg viewBox="0 0 352 270" width="small" height="auto" />
          </Box>
          <Text size="large" color="brand">
            {card.title}
          </Text>
          <Paragraph>{card.description}</Paragraph>
          <ServicesList>
            {card.details.map(({ label, value }) => (
              <li>
                <Box margin={{ bottom: 'small' }}>
                  <Text weight="bold">{label}</Text>
                  <Meter
                    type="bar"
                    round
                    thickness="small"
                    alignSelf="start"
                    values={[{ color: 'brand', value, label }]}
                  />
                </Box>
              </li>
            ))}
          </ServicesList>
        </Card>
      ))}
    </Grid>
  </Section>
)
