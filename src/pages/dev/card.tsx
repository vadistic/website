import { RouterProps } from '@reach/router'
import { Box, BoxProps, Button, ButtonProps, Heading, Paragraph } from 'grommet'
import * as React from 'react'

import { content } from '../../../data/content'
import Layout from '../../components/layout'

export interface ICard extends BoxProps {
  heading?: string
  paragraph?: string
  photo?: string
  buttons?: Array<ButtonProps & JSX.IntrinsicElements['button']>
}

const Card = ({ heading, paragraph, photo, buttons, ...rest }: ICard) => (
  <Box
    pad={{ horizontal: 'medium', vertical: 'large' }}
    elevation="small"
    round="small"
    flex
    {...rest}
  >
    <Heading size="small">Card title</Heading>
    <Paragraph>{content.lorem.paragraph}</Paragraph>
    {buttons && (
      <Box direction="row" wrap gap="small">
        {buttons.map(props => (
          <Button {...props} />
        ))}
      </Box>
    )}
  </Box>
)

const CardPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <Card buttons={[{ label: 'Button' }]} />
    <Card />
    <Card />
  </Layout>
)

export default CardPage
