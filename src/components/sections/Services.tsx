import * as React from 'react'
import { css } from 'react-emotion'

import { Box, Grid, Mode, Text, Tile } from '..'
import { styled } from '../../styles'
import { Tooltip } from '../Tooltip'

import data from '../../../data/data'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

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
  <HoverableTile>
    <object data={svg} type="image/svg+xml" />
    <Text variant="h4">{title}</Text>
    <Text variant="p">{description}</Text>
    <Text variant="h5">
      <List>{list.map((item, i) => <li key={i}>{item}</li>)}</List>
    </Text>
  </HoverableTile>
)

const Figure = styled.figure(
  ({ theme: t }) =>
    css`
      text-align: center;
      line-height: 0;
      margin: 0;

      object {
        filter: grayscale(100%);
        width: ${t.space[5]};
        transition: ${t.tranitions.normal};

        /* This makes links work over object svg */
        pointer-events: none;
      }

      &:hover {
        object {
          filter: none;
        }
      }
    `
)

interface TechItemProps {
  svg: string
  title: string
  caption: string
  url: string
}

const TechItem: React.SFC<TechItemProps> = ({ svg, caption, title, url }) => (
  <Tooltip content={caption}>
    <a href={url} target="__blank">
      <Figure>
        <object data={svg} type="image/svg+xml" />
        <figcaption>
          <Text variant="small">{title}</Text>
        </figcaption>
      </Figure>
    </a>
  </Tooltip>
)

export const ServicesSection: React.SFC = () => (
  <Mode mode={{ color: 'light' }}>
    <Grid.Section gradientBg="white">
      <Grid.Container>
        <Grid.Item left={[1, 2]} spanColumns={[12, 10]}>
          <Box>
            <Text variant="annotation">Skill Spectrum</Text>
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
            <Text variant="h4">Prefered stack</Text>
            <Grid.Container
              noMargin
              columns={[4, 6, 8, 10, 12]}
              justifyItems="center"
            >
              {[
                ...data.services.techItems.design,
                ...data.services.techItems.developement,
              ].map((logo, i) => (
                <TechItem
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
