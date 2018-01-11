import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import { Link } from 'react-router-dom'
import Gallery from 'components/Gallery'

import styled from 'styled-components'
import '!file-loader?name=[name].[ext]!images/logos/6mois-black.png'

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

// TODO Hack max height is moving the content of the cover
// Cover should use a flexbox and follow the height of the image
const Discover = styled.div`
  position: relative;
  bottom: -80px;
  text-align: center;
  max-height: 390px;
  span {
    color: var(--grey-blue);
  }
  
  ${media.tablet`
    display: none;
  `};
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
  margin-bottom: 100px;

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
              ebdo est un journal papier, indépendant, irrigué par ses lecteurs.
              À retrouver chaque vendredi.
            </h2>
          </Title>
          <Text mc m={13}>
            <p>
              Reportages, enquêtes, actus, photos, BD, vie pratique : Ebdo, une
              invitation à prendre du recul pour comprendre, pour soi, pour
              agir.
            </p>
          </Text>
          <Discover>
            <img
              src="https://s3.eu-west-3.amazonaws.com/ebdo/front/website/nomad.png"
              alt="illustration nomade"
              width="100%"
            />
          </Discover>
        </BlockWrap>
      </Row>
    </Layout>
  )
}

HomeLanding.propTypes = {}

export default HomeLanding
