import { graphql } from 'gatsby'
import * as React from 'react'

import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeroSection,
  PageLayout,
  ProcessSection,
  ServicesSection,
} from '../components/index'

export const pageQuery = graphql`
  query indexQuery {
    aboutImage: file(relativePath: { eq: "img/profile-photo.png" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "img/placeholder-photo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const IndexPage: React.SFC<any> = ({ data }) => (
  <PageLayout>
    <HeroSection />
    <AboutSection aboutImage={data.aboutImage.childImageSharp.fluid} />
    <ServicesSection />
    <ProcessSection
      processImage={data.placeholderImage.childImageSharp.fluid}
    />
    <ContactSection />
    <FooterSection />
  </PageLayout>
)

export default IndexPage
