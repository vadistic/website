import * as React from 'react'
import { Box, Grid, Meter, Paragraph, Text } from '../grommet'

import { Card, Section } from '..'
import { content } from '../../../data/content'
import styled from '../../styles/styled-components'

export const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
`

export const ServicesSection = () => (
  <Section title={content.services.annotation}>
    <Grid columns={{ size: 'medium', count: 'fill' }} gap="medium">
      {content.services.items.map(({ Svg, title, description, details }) => (
        <Card>
          <Box margin={{ vertical: 'medium' }} width="50%">
            <Svg viewBox="0 0 352 270" width="100%" height="100%" />
          </Box>
          <Text size="large" color="brand">
            {title}
          </Text>
          <Paragraph>{description}</Paragraph>
          <ServicesList>
            {details.map(({ label, value }) => (
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
