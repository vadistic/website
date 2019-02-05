import React from 'react'
import { styled } from '../styles'

export enum PageType {
  Home,
  Page,
  Post,
}

const LayoutWrapper = styled.div`
  margin: 0;
  overflow: hidden;
`

export interface LayoutProps {
  pageType: PageType
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <LayoutWrapper>{children}</LayoutWrapper>
  </>
)
