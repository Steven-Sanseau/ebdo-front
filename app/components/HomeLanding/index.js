/**
 *
 * HomeLanding
 *
 */

import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import { Link } from 'react-router-dom'
import Gallery from 'components/Gallery'

import styled from 'styled-components'
import '!file-loader?name=[name].[ext]!images/logos/6mois-black.png'
import '!file-loader?name=[name].[ext]!images/home/sommaire-droite.png'
import '!file-loader?name=[name].[ext]!images/home/illu-test.jpg'

import { media } from 'global-styles'
import ArrowDown from 'components/Icon/ArrowDown'

const LinkWrapper = styled(Link)`
  color: var(--grey-blue);
  border-bottom: 1px solid var(--grey-blue);
  text-decoration: none;

  &:hover {
    background-color: var(--grey-blue);
    color: var(--white-true);
  }
`
const Title = styled.h2`
  font-size: 24px;
  line-height: 26px;
  span {
    font-weight: 400;
  }
  ${media.tablet`
    margin-top: 40px;
  `};
`
const Text = styled.p`
  font-size: 18px;
  max-width: 450px;

  img {
    margin-top: -7px;
    margin-left: 5px;
    margin-right: 5px;
  }
`

const Discover = styled.div`
  margin-top: 60px;
  text-align: center;

  span {
    color: var(--grey-blue);
  }
`
const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  ${media.tablet`
    padding: 0;
    padding-bottom: 40px;
    margin-top: 0;
  `};
`

const BlockWrap = styled(Col)`
  min-width: 250px;
  max-width: 417px;
  margin-top: -100px;
  margin-left: 50px;
  padding: 0 50px;
  text-align: left;
  ${media.tablet`
    margin-top: 0;
    margin-left: 0;
    padding: 0;
  `};
`
const ImageWrap = styled(Col)`
  max-width: 336px;
  min-width: 336px;
  position: relative;
  ${media.tablet`
    min-width: inherit;
    max-width: 200px;
    margin: 0 auto;
  `};

`

function HomeLanding() {
  return (
    <Layout>
      <Row center="sm">
        <ImageWrap xs={12} sm={4}>
          <Gallery />
        </ImageWrap>
        <BlockWrap xs={12} sm={4}>
          <Title>
            ebdo <span>est un journal</span> papier, indépendant <span>et</span>{' '}
            proche de ses lecteurs.
          </Title>
          <Text>
            Un projet par les créateurs de{' '}
            <img src="/XXI.png" alt="XXI" height="22" /> et
            <img src="/6mois-black.png" alt="6 mois" height="18" /> grâce au
            soutien des 5 960 lecteurs qui nous ont fait confiance et soutenu
            lors de{' '}
            <LinkWrapper to="#">
              notre campagne de financement participatif.
            </LinkWrapper>
          </Text>
          <Discover>
            <img src="illu-test.jpg" alt="illustration cover" width="100%" />
          </Discover>
        </BlockWrap>
      </Row>
    </Layout>
  )
}

HomeLanding.propTypes = {}

export default HomeLanding
