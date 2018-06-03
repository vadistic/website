import * as React from 'react'
import Link from 'gatsby-link'

import {Code, Container} from '../components'

const Typography: React.SFC = () => (
  <Container>
    <Code>This is some code</Code>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default Typography
