import { RouterProps } from '@reach/router'
import { Box } from 'grommet'
import React from 'react'
import { gradientBackground, Layout } from '../components'
import {
  AboutSection,
  ContactSection,
  FooterSection,
  ProcessSection,
  ServicesSection,
  TechSection,
} from '../sections'

const IndexPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <AboutSection />
    <Box css={gradientBackground}>
      <ServicesSection />
      <TechSection />
    </Box>
    <ProcessSection />
    <ContactSection />
    <Box background="black">
      <FooterSection />
    </Box>
  </Layout>
)

export default IndexPage
