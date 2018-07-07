import { graphql } from 'gatsby';
import * as React from 'react'

import { AboutSection, FooterSection, HeroSection, PageLayout, ServicesSection } from '../components'

export const pageQuery = graphql`
  query indexQuery {
    file(relativePath: { eq: "img/profile-photo.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
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
    <FooterSection />
  </PageLayout>
)

export default IndexPage
