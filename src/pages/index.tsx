import { Box } from 'grommet'
import React from 'react'
import { gradientBackground, PageType } from '../components'
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
    <Box css={gradientBackground}>
      <ServicesSection />
      <TechSection />
    </Box>
    <ProcessSection />
    <ContactSection />
    <FooterSection />
  </PageTemplate>
)

export default IndexPage
