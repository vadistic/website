import { Box } from 'grommet'
import React, { useContext } from 'react'
import { styled } from '../styles'
import { StateContext } from '../templates'

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

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [globalState] = useContext(StateContext)

  return (
    <>
      <LayoutWrapper>
        <Box background={globalState.themeMode === 'dark' ? 'black' : 'white'}>{children}</Box>
      </LayoutWrapper>
    </>
  )
}
