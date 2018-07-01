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

import { PageLayout } from '../components'

const LayoutsPage: React.SFC<{}> = () => (
  <PageLayout>
    <HeroSection />
    <TwoColSectionLayout />
    <OneColSectionLayout />
    <FlexCardsSectionLayout />
    <GridCardsSectionLayout />
    <DualBackgroundSectionLayout />
    <FocusedCardsSectionLayout />
  </PageLayout>
)

export default LayoutsPage
