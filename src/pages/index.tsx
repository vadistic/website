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
import { PageTemplate } from '../templates'

const IndexPage: React.FC = () => (
  <PageTemplate pageType={PageType.Home}>
    <AboutSection />
    <Box css={gradientBackground}>
      <ServicesSection />
      <TechSection />
    </Box>
    <ProcessSection />
    <BenefitsSection />
    <ContactSection />
    <Box background="black">
      <FooterSection />
    </Box>
  </PageTemplate>
)

export default IndexPage
