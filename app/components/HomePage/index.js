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

import NaturalFormOrderContainer from 'containers/NaturalFormOrderContainer/Loadable'

const ProgressWrap = styled(Row)`
  padding-top: 60px;
  margin-top: 100px;

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
    width: calc(100% - 20px);
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
  margin-top: 0;
  max-width: 450px;

  span {
    color: var(--black);
  }
  ${media.tablet`
    font-size: 22px;
    line-height: 24px;
  `};
`

const OpacityLayout = styled.div`
  opacity: ${props => (props.isOpen ? '0.15' : '1')};
`
const TextWrap = styled.div`
  margin-bottom: 50px;
  font-size: 18px;
  max-width: 450px;
  ${media.tablet`
    font-size: 16px;
  `};
`
const HomeLandingWrap = styled.div`
  margin-bottom: 140px;
  padding-top: 327px;
  border-bottom: 1px solid var(--silver);
  ${media.tablet`
    margin-bottom: 40px;
`};
`
export class HomePage extends React.Component {
  render() {
    return (
      <Grid fluid>
        <NavBar
          page={this.props.page}
          dispatch={this.props.dispatch}
          isLoggedIn={this.props.isLoggedIn}
        />
        <HomeLandingWrap>
          <HomeLanding />
        </HomeLandingWrap>
        <OpacityLayout>
          <Layout>
            <Row between="sm">
              <ColCustom w={8} />
              <ColCustom w={14} m={13} mc>
                <Title>
                  <span>L’expérience ebdo,</span> chez vous, au prix que vous
                  souhaitez
                </Title>
                <TextWrap>
                  Lire <strong>ebdo</strong> chaque semaine, c’est choisir un
                  journal sans publicité avec une information originale et sans
                  compromis
                </TextWrap>
              </ColCustom>
              <Row between="sm">
                <ColCustom w={8}>
                  <ImageWrap>
                    <img
                      src="https://s3.eu-west-3.amazonaws.com/ebdo/front/website/price.png"
                      alt="abo illustration"
                      width="100%"
                    />
                  </ImageWrap>
                </ColCustom>
                <ColCustom w={14} m={13} mc>
                  <NaturalFormOrderContainer id="NaturalFormOrder" />
                </ColCustom>
              </Row>
            </Row>
          </Layout>
          <ProgressWrap>
            <Col xs={12} sm={12}>
              <ProgressContainer />
            </Col>
          </ProgressWrap>
        </OpacityLayout>
        <ManifestoBlock />
        <Footer dispatch={this.props.dispatch} />
      </Grid>
    )
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func,
  page: PropTypes.string,
  offer: PropTypes.object,
  dispatchSetOfferParams: PropTypes.func,
  isLoggedIn: PropTypes.bool
}

export default HomePage
