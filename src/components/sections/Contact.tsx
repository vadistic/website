import * as React from 'react'

import { Box, Button, Grid, Mode, Text, Tooltip } from '..'

import { css } from 'react-emotion'
import { styled } from '../../styles'

import icons from '../../../data/img/icons'
import config from '../../../data/SiteConfig'

interface IconProps {
  iconName: keyof typeof icons
  variant?: 'basic' | 'round'
  className?: string
}

const Icon: React.SFC<IconProps> = ({
  iconName,
  variant = 'basic',
  className,
}) => {
  const data = icons[iconName][variant]
  return <object type="image/svg+xml" data={data} />
}

interface SocialIconProps extends IconProps {
  url?: string
  caption: string
}

const SocialIconBase: React.SFC<SocialIconProps> = ({
  iconName,
  variant = 'basic',
  url,
  caption,
  className,
}) => (
  <Tooltip content={caption} short>
    <a href={url} className={className} target="__blank">
      <Icon iconName={iconName} />
    </a>
  </Tooltip>
)

const SocialIcon = styled(SocialIconBase)(
  ({ theme: t }) =>
    css`
      margin: 0 ${t.space[1]};

      object {
        pointer-events: none;
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
              <Icon iconName="name" />
              <Text variant="span">{config.userName}</Text>
            </Box>
            <Box flex alignItems="center">
              <Icon iconName="location" />
              <Text variant="span">{config.userLocation}</Text>
            </Box>
          </Box>
        </Grid.Item>
        <Grid.Item
          left={[1, 8, 8]}
          spanColumns={[12, 6, 4]}
          alignItems="center"
        >
          {config.userLinks.map(item => (
            <SocialIcon
              caption={item.caption}
              iconName={item.iconName as SocialIconProps['iconName']}
              variant="round"
              url={item.url}
            />
          ))}
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
