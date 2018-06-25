import * as React from 'react'

import {
  DualBackgroundSectionLayout,
  FlexCardsSectionLayout,
  FocusedCardsSectionLayout,
  GridCardsSectionLayout,
  HeroSection,
  OneColSectionLayout,
  TwoColSectionLayout,
} from '../sections'

import { Layout } from '../components'

const LayoutsPage: React.SFC<{}> = () => (
  <Layout>
    <HeroSection />
    <TwoColSectionLayout />
    <OneColSectionLayout />
    <FlexCardsSectionLayout />
    <GridCardsSectionLayout />
    <DualBackgroundSectionLayout />
    <FocusedCardsSectionLayout />
  </Layout>
)

export default LayoutsPage
