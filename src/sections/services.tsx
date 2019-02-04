import { Box, Grid, Heading, Meter, Paragraph, Text } from 'grommet'
import React from 'react'
import { Illustrations } from '../assets'
import { Card, PlainUl, SectionTitle, Spacer } from '../components'

export const ServicesSection = () => {
  return (
    <section>
      <Spacer>
        <SectionTitle title={sectionTitle} />
        <Grid columns={{ size: 'medium', count: 'fill' }} gap="medium">
          {servicesItems.map(({ Svg, title, description, details }) => (
            <Card>
              <Box margin={{ vertical: 'medium' }} width="50%">
                <Svg viewBox="0 0 352 270" width="100%" height="100%" />
              </Box>
              <Heading level="3" color="brand">
                {title}
              </Heading>
              <Paragraph>{description}</Paragraph>
              <PlainUl>
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
              </PlainUl>
            </Card>
          ))}
        </Grid>
      </Spacer>
    </section>
  )
}

/*
 * CONTENT
 */

const sectionTitle = `Skill spectrum`

const servicesItems = [
  {
    Svg: Illustrations.DesignAlt,
    title: `Design`,
    description: 'Lorem pixum dolor amet',
    details: [
      { label: 'User Interfaces', value: 60 },
      { label: 'Branding', value: 80 },
      { label: 'Print', value: 40 },
    ],
  },
  {
    Svg: Illustrations.DevelopmentAlt,
    title: `Development`,
    description: 'Lorem pixum dolor amet',
    details: [
      { label: 'Static Websites', value: 80 },
      { label: 'Web Apps', value: 80 },
      { label: 'Design Systems', value: 60 },
    ],
  },
  {
    Svg: Illustrations.RealisationAlt,
    title: `Realisation`,
    description: 'Lorem pixum dolor amet',
    details: [
      { label: 'Project Management', value: 60 },
      { label: 'Product & UX', value: 40 },
      { label: 'Tech Recruitment', value: 80 },
    ],
  },
]
