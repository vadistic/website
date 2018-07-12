import * as React from 'react'

import { Box, Button, Grid, Mode, Text, Tooltip } from '..'

import { css } from 'react-emotion'
import { styled } from '../../styles/index'

import { IconBasic, IconRound } from '..'
import config from '../../../data/SiteConfig'

interface SocialIconProps {
  url: string
  caption: string
  iconName: string
  className?: string
}

const SocialIconBase: React.SFC<SocialIconProps> = ({
  iconName,
  url,
  caption,
  className,
}) => {
  const Icon = IconRound[iconName]
  return (
    <Tooltip content={caption} short className={className}>
      <a href={url} target="__blank">
        <Icon />
      </a>
    </Tooltip>
  )
}

const SocialIcon = styled(SocialIconBase)(
  ({ theme: t }) =>
    css`
      a {
        margin: 0 ${t.space[1]};
      }


    `
)

export const ContactSection: React.SFC = () => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section background="nearWhite">
      <Grid.Container>
        <Grid.Item left={[1, 2]} spanColumns={[12, 10]}>
          <Box>
            <Text variant="annotation">Contact</Text>
          </Box>
        </Grid.Item>
        <Grid.Item left={[1, 2]} spanColumns={[12, 10, 6]} spanRows={2}>
          <Box>
            <Text variant="h4">
              Feel free to say<Button>Hello</Button>
            </Text>
            <Text variant="p">
              I’m open to new projects and would gladly take part in realisation
              of a good idea.
            </Text>
          </Box>
        </Grid.Item>
        <Grid.Item left={[1, 2, 8]} spanColumns={[12, 6, 4]}>
          <Box mt={[4, , 0]}>
            <Box flex alignItems="center">
              <IconBasic.Name />
              <Text variant="span">{config.userName}</Text>
            </Box>
            <Box flex alignItems="center">
              <IconBasic.Location />
              <Text variant="span">{config.userLocation}</Text>
            </Box>
          </Box>
        </Grid.Item>
        <Grid.Item
          left={[1, 8, 8]}
          spanColumns={[12, 6, 4]}
          alignItems="center"
        >
          {config.userLinks.map((item, i) => (
            <SocialIcon
              key={i}
              caption={item.caption}
              iconName={item.iconName}
              url={item.url}
            />
          ))}
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
