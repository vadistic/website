import { Link } from 'gatsby'
import React from 'react'
import { PageTemplate } from '../templates'

const SecondPage: React.FC = () => (
  <PageTemplate>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </PageTemplate>
)

export default SecondPage
