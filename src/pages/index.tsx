import { RouterProps } from '@reach/router'
import React from 'react'

import { gradientBackground, Layout } from '../components'
import { Box } from '../components/grommet'
import {
  AboutSection,
  ContactSection,
  FooterSection,
  ProcessSection,
  ServicesSection,
  TechSection,
} from '../sections'
import { MediaIndicator } from '../utils/media-indicator'

const IndexPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <MediaIndicator />
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
