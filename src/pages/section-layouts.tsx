import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'

import { PageLayout, Text } from '../components'
import { TwoColLayout } from '../components/layouts'

import { data as mockData } from '../data/data'

// export const pageQuery = graphql`
//   query PlaceholderImageQuery {
//     placeholderImage: imageSharp(id: { regex: "/header/" }) {
//       sizes(maxWidth: 1240) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `

const SectionLayoutsPage: React.SFC<any> = ({ data }) => (
  <PageLayout>
    <TwoColLayout
      contentLeft={
        <img
          title="Placeholder image"
          alt="Meaningless landscape photo"
          /* sizes={data.placeholderImage.sizes} */
        />
      }
      contentRight={
        <>
          <Text variant="h3">{mockData.lorem.headline}</Text>
          <Text variant="p">{mockData.lorem.paragraph}</Text>
        </>
      }
    />
  </PageLayout>
)

export default SectionLayoutsPage
