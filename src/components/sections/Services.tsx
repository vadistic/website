import * as React from 'react'
import { css } from 'react-emotion'

import { styled } from '../../styles'
import { Box, Grid, Mode, Text, Tile } from '../index'
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
  svg: string
  title: string
  description: string
  list: string[]
}

const ServiceItem: React.SFC<ServiceItemProps> = ({
  svg,
  title,
  description,
  list,
}) => (
  <Tile>
    <object data={svg} type="image/svg+xml" />
    <Text variant="h4">{title}</Text>
    <Text variant="p">{description}</Text>
    <Text variant="h5">
      <List>{list.map((item, i) => <li key={i}>{item}</li>)}</List>
    </Text>
  </Tile>
)

interface TechItemProps {
  svg: string
  title: string
  caption: string
  url: string
  className?: string
}

const TechItemBase: React.SFC<TechItemProps> = ({
  svg,
  caption,
  title,
  url,
  className,
}) => (
  <Tooltip content={caption} className={className}>
    <a href={url} target="__blank">
      <figure>
        <object data={svg} type="image/svg+xml" />
        <figcaption>
          <Text variant="small">{title}</Text>
        </figcaption>
      </figure>
    </a>
  </Tooltip>
)

const TechItem = styled(TechItemBase)(
  ({ theme: t }) =>
    css`
      figure {
        text-align: center;
        line-height: 0;
        margin: 0;
      }

      object {
        filter: grayscale(100%);
        width: ${t.space[5]};
        transition: ${t.tranitions.normal};

        /* This makes links work over object svgs */
        pointer-events: none;
      }

      &:hover {
        object {
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
                svg={item.svg}
                title={item.title}
                description={item.description}
                list={item.list}
              />
            ))}
          </Grid.Container>
        </Grid.Item>
        <Grid.Item left={[1, 2]} spanColumns={[12, 10]}>
          <Box mt={4}>
            <Text variant="h4">{data.tech.annotation}</Text>
            <Grid.Container
              noMargin
              columns={[4, 6, 8, 10, 12]}
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
                  svg={logo.svg}
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
