import { Box, Grid, Heading, Meter, Paragraph, Text } from 'grommet'
import { normalizeColor } from 'grommet/utils'
import { mdx } from 'mdx.macro'
import React from 'react'
import { Illustrations } from '../assets'
import { Card, PlainUl, Section, SectionTitle } from '../components'
import { css, ThemeProps, useMedia } from '../styles'
import { ElementType } from '../utils'

interface ServiceCardProps {
  item: ElementType<typeof servicesItems>
}

const serviceCardStyles = ({ theme }: ThemeProps) => css`
  .illustration {
    #brand a {
      fill: ${normalizeColor('brand', theme)};
    }

    #neutral *,
    #neutral_2 * {
      fill: ${normalizeColor('background-alt', theme)};
    }

    #accent * {
      fill: ${theme.global.colors.white};
    }
  }
`

const ServiceCard: React.FC<ServiceCardProps> = ({
  item: { Svg, title, description, details },
}) => (
  <Card css={serviceCardStyles}>
    <Box
      margin={{ vertical: 'medium' }}
      width="50%"
      background={{ light: 'light-1', dark: 'dark-2' }}
    >
      <Svg className="illustration" width="100%" height="100%" />
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
)

export const ServicesSection = () => {
  const { cond } = useMedia()
  return (
    <Section id="services">
      <SectionTitle>{sectionTitle}</SectionTitle>
      <Box margin={{ bottom: 'medium' }}>
        <ServicesMdx />
      </Box>
      <Grid
        columns={{ size: cond({ only: 'small' }) ? 'auto' : 'medium', count: 'fit' }}
        gap="large"
      >
        {servicesItems.map(item => (
          <ServiceCard item={item} />
        ))}
      </Grid>
    </Section>
  )
}

/*
 * CONTENT
 */

const sectionTitle = `Skill spectrum 👨‍🎨👨‍💻👨‍💼`

const ServicesMdx = mdx`
One man start-up team. Extended Full Stack. Jack of all trades, but pretty confident in those.
`

const servicesItems = [
  {
    Svg: Illustrations.DesignAlt,
    title: `Design`,
    description: 'Experienced with print, fluent with tools, and a true desire for quality',
    details: [
      { label: 'User Interfaces', value: 60 },
      { label: 'Branding', value: 80 },
      { label: 'Print', value: 40 },
    ],
  },
  {
    Svg: Illustrations.DevelopmentAlt,
    title: `Development`,
    description: 'Technical background and knowledgeable about hacking modern apps',
    details: [
      { label: 'Static Websites', value: 80 },
      { label: 'Web Apps', value: 80 },
      { label: 'Design Systems', value: 60 },
    ],
  },
  {
    Svg: Illustrations.RealisationAlt,
    title: `Realisation`,
    description: 'Startup experience in making things happen',
    details: [
      { label: 'Project Management', value: 60 },
      { label: 'Product & UX', value: 40 },
      { label: 'Tech Recruitment', value: 80 },
    ],
  },
]
