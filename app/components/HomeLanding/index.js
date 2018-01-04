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
import ColCustom from 'components/Grid/Col'

const LinkWrapper = styled(Link)`
  color: var(--grey-blue);
  border-bottom: 1px solid var(--grey-blue);
  text-decoration: none;

  &:hover {
    background-color: var(--grey-blue);
    color: var(--white-true);
  }
`

const AWrapper = styled.a`
  color: var(--grey-blue);
  border-bottom: 1px solid var(--grey-blue);
  text-decoration: none;

  &:hover {
    background-color: var(--grey-blue);
    color: var(--white-true);
  }
`
const Title = styled(ColCustom)`
  h2 {
    font-size: 24px;
    line-height: 26px;
    span {
      font-weight: 400;
    }
    ${media.tablet`
      margin-top: 80px;
      margin-bottom: 30px;
      max-width: 450px;
    `};
  }
`
const Text = styled(ColCustom)`
  p {
    font-size: 18px;
    ${media.tablet`
      font-size: 16px;
    `};
  }

  img {
    margin-top: -7px;
    margin-left: 5px;
    margin-right: 5px;
    width: auto;
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
  margin-left: auto;
  margin-right: auto;
  position: relative;

  ${media.tablet`
    padding: 0;
    padding-bottom: 40px;
    margin-top: 0;
    width: calc(100% - 20px);
  `};
`

const BlockWrap = styled(ColCustom)`
  min-width: 250px;
  max-width: 417px;
  margin-top: -120px;
  margin-left: 100px;
  padding: 0 40px;
  text-align: left;
  ${media.tablet`
    margin-top: 0;
    margin-left: 0;
    padding: 0;
  `};
`
const ImageWrap = styled(ColCustom)`
  max-width: 336px;
  min-width: 336px;
  position: relative;
  ${media.tablet`
    min-width: inherit;
    max-width: 200px;
    margin: 0 auto;
    height: 100%;
  `};
`

function HomeLanding() {
  return (
    <Layout>
      <Row center="sm">
        <ImageWrap w={8}>
          <Gallery />
        </ImageWrap>
        <BlockWrap w={8}>
          <Title mc m={13}>
            <h2>
              ebdo <span>est un journal</span> papier, indépendant{' '}
              <span>et</span> proche de ses lecteurs.
            </h2>
          </Title>
          <Text mc m={13}>
            <p>
              Un projet par les créateurs de{' '}
              <img src="/XXI.png" alt="XXI" height="15" /> et
              <img src="/6mois-black.png" alt="6 mois" height="15" /> grâce au
              soutien des 5 960 lecteurs qui nous ont fait confiance et soutenu
              lors de{' '}
              <AWrapper
                target="_blank"
                rel="noopener"
                href="https://www.kisskissbankbank.com/ebdo-un-journal-independant-et-inspirant">
                notre campagne de financement participatif.
              </AWrapper>
            </p>
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
