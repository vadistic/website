import { graphql } from 'gatsby';
import * as React from 'react'

import { AboutSection, ContactSection, FooterSection, HeroSection, PageLayout, ProcessSection, ServicesSection } from '../components/index'

export const pageQuery = graphql`
  query indexQuery {
    file(relativePath: { eq: "img/profile-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const IndexPage: React.SFC<any> = ({data}) => (
  <PageLayout>
    <HeroSection />
    <AboutSection profileImage={data.file.childImageSharp.fluid}/>
    <ServicesSection/>
    <ProcessSection/>
    <ContactSection/>
    <FooterSection />
  </PageLayout>
)

export default IndexPage
