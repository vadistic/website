import * as React from 'react'
import Link from 'gatsby-link'

import styled, { css } from 'react-emotion'

const Title = styled.h1`
  color: purple;
`

const Component: React.SFC<any> = ({ children, className }) => (
  <h3 className={className}>{children}</h3>
)


const IndexPage = () => (
  <div>
    <Title>Hi</Title>
    <Component className={css(tw('text text-lg text-brand'))}>ABC</Component>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    hey
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
