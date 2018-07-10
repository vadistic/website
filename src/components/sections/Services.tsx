import * as React from 'react'
import { css } from 'react-emotion'

import { Box, Card, Grid, Mode, Text } from '..'
import { styled } from '../../styles'

import illustrations from '../../../data/img/illustrations'

import logos from '../../../data/img/logos'
import { Tooltip } from '../Tooltip'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const HoverableCard = styled(Card)(
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
  <HoverableCard>
    <object data={svg} type="image/svg+xml" />
    <Text variant="h4">{title}</Text>
    <Text variant="p">{description}</Text>
    <Text variant="h5">
      <List>{list.map((item, i) => <li key={i}>{item}</li>)}</List>
    </Text>
  </HoverableCard>
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
            <ServiceItem
              svg={illustrations.design}
              title="Design"
              description="Lorem pixum dolor amet"
              list={['User Interfaces', 'Branding', 'Print']}
            />
            <ServiceItem
              svg={illustrations.development}
              title="Developement"
              description="Lorem pixum dolor amet"
              list={['Static Websites', 'Web Apps', 'Design Systems']}
            />
            <ServiceItem
              svg={illustrations.realization}
              title="Realization"
              description="Lorem pixum dolor amet"
              list={['Project Management', 'Product & UX', 'Tech Recruitment']}
            />
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
              {[...logos.design, ...logos.developement].map((logo, i) => (
                <Grid.Item spanColumns={1}>
                  <Tooltip content={logo.caption}>
                    <a href={logo.url} target="__blank">
                      <Figure>
                        <object
                          key={i}
                          data={logo.svg}
                          type="image/svg+xml"
                          name="test"
                        />
                        <figcaption>
                          <Text variant="small">{logo.title}</Text>
                        </figcaption>
                      </Figure>
                    </a>
                  </Tooltip>
                </Grid.Item>
              ))}
            </Grid.Container>
          </Box>
        </Grid.Item>
      </Grid.Container>
    </Grid.Section>
  </Mode>
)
