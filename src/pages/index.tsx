import { Box } from 'grommet'
import React from 'react'
import { gradientBackground, PageType } from '../components'
import {
  AboutSection,
  ContactSection,
  FooterSection,
  ProcessSection,
  ServicesSection,
  TechSection,
} from '../sections'
import { BenefitsSection } from '../sections/benefits'
import { HeroSection } from '../sections/hero'
import { PageTemplate } from '../templates'

const IndexPage: React.FC = () => (
  <PageTemplate pageType={PageType.Home}>
    <HeroSection />
    <ContactSection />
    <Box css={gradientBackground}>
      <ServicesSection />
      <TechSection />
    </Box>
    <ProcessSection />
    <BenefitsSection />
    <FooterSection />
  </PageTemplate>
)

export default IndexPage
