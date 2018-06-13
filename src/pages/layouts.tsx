import Link from 'gatsby-link'
import * as React from 'react'

import {
  HeroSection,
  OneColSectionLayout,
  SmallItemsSectionLayout,
  TwoColSectionLayout,
} from '../sections'

import { Layout } from '../components'

const LayoutsPage: React.SFC<{}> = ({ location }: any) => (
  <Layout location={location}>
    <HeroSection />
    <TwoColSectionLayout />
    <OneColSectionLayout />
    <SmallItemsSectionLayout />
  </Layout>
)

export default LayoutsPage
