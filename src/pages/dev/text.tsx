import { RouterProps } from '@reach/router'
import { Heading, Paragraph } from 'grommet'
import React from 'react'
import { Layout } from '../../components/layout'
import { content } from '../../content'

const TextPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <Heading size={'xlarge'}>{content.lorem.heading}</Heading>
    <Heading size={'large'}>{content.lorem.heading}</Heading>
    <Heading size={'medium'}>{content.lorem.heading}</Heading>
    <Heading size={'small'}>{content.lorem.heading}</Heading>

    <Paragraph size={'medium'}>
      <h1>Heading 1</h1>
      {content.lorem.paragraph}
      <h2>Heading 2</h2>
      {content.lorem.paragraph}
      <h3>Heading 3</h3>
      {content.lorem.paragraph}
      <h4>Heading 4</h4>
      {content.lorem.paragraph}
      <h5>Heading 5</h5>
      {content.lorem.paragraph}
      <h6>Heading 6</h6>
      {content.lorem.paragraph}
    </Paragraph>
  </Layout>
)

export default TextPage
