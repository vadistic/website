import * as React from 'react'
import { css } from 'react-emotion'

import { Box, Grid, IllustrationSm, Logo, Mode, Text, Tile } from '..'
import { styled } from '../../styles'
import { Tooltip } from '../Tooltip'

import data from '../../../data/data'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

/* TODO: Refactor as tile prop */
const HoverableTile = styled(Tile)(
  ({ theme: t }) =>
    css`
      border: ${t.borderWidths.base} solid transparent;
      transition: ${t.tranitions.normal};

      :hover {
        border-color: ${t.colors.primary};
        box-shadow: ${t.shadows.lg};
      }
    `
)

interface ServiceItemProps {
  svgName: string
  title: string
  description: string
  list: string[]
}

const ServiceItem: React.SFC<ServiceItemProps> = ({
  svgName,
  title,
  description,
  list,
}) => {
  const Illustration = IllustrationSm[svgName]
  return (
    <Tile>
      <Illustration />
      <Text variant="h4">{title}</Text>
      <Text variant="p">{description}</Text>
      <Text variant="h5">
        <List>{list.map((item, i) => <li key={i}>{item}</li>)}</List>
      </Text>
    </Tile>
  )
}
interface TechItemProps {
  svgName: string
  title: string
  caption: string
  url: string
  className?: string
}

const TechItemBase: React.SFC<TechItemProps> = ({
  svgName,
  caption,
  title,
  url,
  className,
}) => {
  const TechLogo = Logo[svgName]
  return (
    <Box w={5}>
      <Tooltip content={caption} className={className}>
        <a href={url} target="__blank">
          <figure>
            <TechLogo title={svgName} />
            <figcaption>
              <Text variant="small">{title}</Text>
            </figcaption>
          </figure>
        </a>
      </Tooltip>
    </Box>
  )
}

const TechItem = styled(TechItemBase)(
  ({ theme: t }) =>
    css`
      figure {
        text-align: center;
        margin: 0;
      }

      svg {
        filter: grayscale(100%);
        transition: ${t.tranitions.normal};
      }

      &:hover {
        svg {
          filter: none;
        }
      }
    `
)

export const ServicesSection: React.SFC = () => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section gradientBg="white">
      <Grid.Container>
        <Grid.Item left={[1, 2]} spanColumns={[12, 10]}>
          <Box>
            <Text variant="annotation">{data.services.annotation}</Text>
          </Box>
        </Grid.Item>
        <Grid.Item left={[1, 2]} spanColumns={[12, 10]}>
          <Grid.Container columns={[1, 2, 2, 3, 3]} noMargin>
            {data.services.serviceItems.map((item, i) => (
              <ServiceItem
                key={i}
                svgName={item.svgName}
                title={item.title}
                description={item.description}
                list={item.list}
              />
            ))}
          </Grid.Container>
        </Grid.Item>
        <Grid.Item left={[1, 2]} spanColumns={[12, 10]}>
          <Box mt={4} width="100%">
            <Text variant="h4">{data.tech.annotation}</Text>
            <Grid.Container
              noMargin
              columns={'repeat( auto-fit, minmax(5rem, 1fr) )'}
              justifyItems="center"
            >
              {[
                ...data.tech.techItems.design,
                ...data.tech.techItems.developement,
              ].map((logo, i) => (
                <TechItem
                  key={i}
                  title={logo.title}
                  caption={logo.caption}
                  svgName={logo.svgName}
                  url={logo.url}
                />
              ))}
            </Grid.Container>
          </Box>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
