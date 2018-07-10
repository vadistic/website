import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'

import {
  DoubleColumnLayout,
  DualBackgroundSectionLayout,
  FlexCardsSectionLayout,
  FocusedCardsSectionLayout,
  GridCardsSectionLayout,
  HeroSection,
  PageLayout,
  SingleColumnLayout,
  Text,
} from '../../components/index'

import mockData from '../../../data/data'

interface LayoutsPageProps {
  data: any
}

const LayoutsPage: React.SFC<LayoutsPageProps> = ({ data }) => (
  <PageLayout>
    <code>Single Column Layout</code>
    <SingleColumnLayout>
      <Text variant="h3">{mockData.lorem.headline}</Text>
      <Text variant="p">{mockData.lorem.paragraph}</Text>
      <Img
        title="Placeholder image"
        alt="Meaningless landscape photo"
        fluid={data.file.childImageSharp.fluid}
      />
      <Text variant="h3">{mockData.lorem.headline}</Text>
      <Text variant="p">{mockData.lorem.paragraph}</Text>
    </SingleColumnLayout>
    <code>Double Column Layout</code>
    <DoubleColumnLayout
      contentLeft={
        <Img
          title="Placeholder image"
          alt="Meaningless landscape photo"
          fluid={data.file.childImageSharp.fluid}
        />
      }
      contentRight={
        <>
          <Text variant="h3">{mockData.lorem.headline}</Text>
          <Text variant="p">{mockData.lorem.paragraph}</Text>
        </>
      }
    />
    <HeroSection />

    <FlexCardsSectionLayout />
    <GridCardsSectionLayout />
    <DualBackgroundSectionLayout />
    <FocusedCardsSectionLayout />
  </PageLayout>
)

export default LayoutsPage

export const pageQuery = graphql`
  query PlaceholderImageQuery {
    file(relativePath: { eq: "img/placeholder-photo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
