import * as React from 'react'

import { Box, Button, Grid, Mode, Text, Tooltip } from '..'

import { css } from 'react-emotion'
import icons from '../../data/img/icons'
import { mq, styled } from '../../styles'

interface SocialIconProps {
  name: keyof typeof icons
  variant?: 'basic' | 'round'
  href?: string
  className?: string
}

const SocialIconBase: React.SFC<SocialIconProps> = ({
  name,
  variant = 'basic',
  href,
  className,
}) => {
  const data = icons[name][variant]
  return (
    <a href={href} className={className} target="__blank">
      <object type="image/svg+xml" data={data} />
    </a>
  )
}

const SocialIcon = styled(SocialIconBase)(
  ({ theme: t }) =>
    css`
      display: flex;
      margin: 0 ${t.space[1]};

      object {
        pointer-events: none;
        fill: red;
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
              <SocialIcon name="name" />
              <Text variant="span">Jakub Wadas</Text>
            </Box>
            <Box flex alignItems="center">
              <SocialIcon name="location" />
              <Text variant="span">Tricity, Poland</Text>
            </Box>
          </Box>
        </Grid.Item>
        <Grid.Item
          left={[1, 8, 8]}
          spanColumns={[12, 6, 4]}
          alignItems="center"
        >
          {[
            {
              icon: 'mail',
              content: 'jakub.wadas@outlook.com',
              href: 'mailto:jakub.wadas@outlook.com',
            },
            {
              icon: 'skype',
              content: 'check',
              href: 'skype:jakub.wadas',
            },
            {
              icon: 'linkedin',
              content: 'jakubwadas',
              href: 'https://www.linkedin.com/in/jakubwadas',
            },
            {
              icon: 'behance',
              content: 'vadistic',
              href: 'https://behance.net/vadistic',
            },
            {
              icon: 'github',
              content: 'vadistic',
              href: 'https://github.com/vadistic',
            },
          ].map(item => (
            <Tooltip content={item.content} short>
              <SocialIcon
                name={item.icon as SocialIconProps['name']}
                variant="round"
                href={item.href}
              />
            </Tooltip>
          ))}
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
