import * as React from 'react'

import { AboutSection, FooterSection, HeroSection, PageLayout, ServicesSection } from '../components'

const IndexPage: React.SFC<{}> = () => (
  <PageLayout>
    <HeroSection />
    <AboutSection />
    <ServicesSection/>
    <FooterSection />
  </PageLayout>
)

export default IndexPage
