import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Footer from 'components/Footer'
import styled from 'styled-components'
import { media } from 'global-styles'

import NavBar from 'components/NavBar'
import ProgressContainer from 'containers/ProgressContainer'
import ManifestoBlock from 'components/ManifestoBlock'
import HomeLanding from 'components/HomeLanding'
import ColCustom from 'components/Grid/Col'

import { NaturalFormOrderContainer } from 'containers/NaturalFormOrderContainer'
import '!file-loader?name=[name].[ext]!../../images/home/abo-illu.png'

const ProgressWrap = styled(Row)`
  padding-top: 80px;
  padding-bottom: 20px;
  margin-top: 120px;

  ${media.tablet`
    margin-top: 60px;
    padding-top: 40px;
  `};
`

const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    padding: 40px 0;
  `};
`
const ImageWrap = styled.div`
  display: flexbox;
  align-items: center;
`

const Title = styled.h3`
  color: var(--squash);
  font-size: 28px;
  margin-bottom: 30px;
  max-width: 450px;

  span {
    color: var(--black);
  }
`

const TextWrap = styled.div`
  margin-bottom: 50px;
  font-size: 18px;
  max-width: 450px;
`
const HomeLandingWrap = styled.div`
  margin-bottom: 100px;
  padding-top: 327px;
  border-bottom: 1px solid var(--silver);
  ${media.tablet`
    margin-bottom: 40px;
`};
`

function HomePage(props) {
  return (
    <Grid fluid>
      <NavBar page={props.page} dispatch={props.dispatch} />
      <HomeLandingWrap>
        <HomeLanding />
      </HomeLandingWrap>
      <Layout>
        <Row between="sm">
          <ColCustom w={8}>
          </ColCustom>
          <ColCustom w={14}>
            <Title>
              <span>L’expérience ebdo,</span> chez vous, au prix que vous
              souhaitez
            </Title>
            <TextWrap>
              S'offrir <strong>ebdo</strong> chaque semaine, c'est choisir une
              information indépendante, un journal sans pub et sans compromis.
            </TextWrap>
          </ColCustom>
          <Row between="sm">
            <ColCustom w={8}>
              <ImageWrap>
                <img src="abo-illu.png" alt="abo illustration" width="100%" />
              </ImageWrap>
            </ColCustom>
            <ColCustom w={14}>
              <NaturalFormOrderContainer
                dispatchSetOfferParams={props.dispatchSetOfferParams}
                offer={props.offer}
              />
            </ColCustom>
          </Row>
        </Row>
      </Layout>
      <ProgressWrap>
        <Col xs={12} sm={12}>
          <ProgressContainer />
        </Col>
      </ProgressWrap>
      <ManifestoBlock />
      <Footer dispatch={props.dispatch} />
    </Grid>
  )
}

HomePage.propTypes = {
  dispatch: PropTypes.func,
  page: PropTypes.string,
  offer: PropTypes.object,
  dispatchSetOfferParams: PropTypes.func
}

export default HomePage
