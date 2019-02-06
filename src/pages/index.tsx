import { Box } from 'grommet'
import React from 'react'
import { gradientBackgroundStyles, PageType } from '../components'
import {
  ContactSection,
  FooterSection,
  ProcessSection,
  ServicesSection,
  TechSection,
} from '../sections'
import { HeroSection } from '../sections/hero'
import { PageTemplate } from '../templates'

const IndexPage: React.FC = () => (
  <PageTemplate pageType={PageType.Home}>
    <HeroSection />
    <Box css={gradientBackgroundStyles}>
      <ServicesSection />
      <TechSection />
    </Box>
    <ProcessSection />
    <ContactSection />
    <FooterSection />
  </PageTemplate>
)

export default IndexPage
