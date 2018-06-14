import Link from 'gatsby-link'
import * as React from 'react'

import {
  FlexCardsSectionLayout,
  GridCardsSectionLayout,
  HeroSection,
  OneColSectionLayout,
  TwoColSectionLayout,
} from '../sections'

import { Layout } from '../components'

const LayoutsPage: React.SFC<{}> = ({ location }: any) => (
  <Layout location={location}>
    <HeroSection />
    <TwoColSectionLayout />
    <OneColSectionLayout />
    <FlexCardsSectionLayout />
    <GridCardsSectionLayout />
  </Layout>
)

export default LayoutsPage
