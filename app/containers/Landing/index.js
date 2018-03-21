import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

import Image from 'components/Image'

import { push } from 'react-router-redux'
// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getValidTokenSlimpay } from 'actions/token'
import { setOfferParams } from 'actions/offer'
import { newCheckout } from 'actions/checkout'

// SELECTOR
import { makeSelectPath } from 'selectors/route'
import { makeSelectSubscriptionData } from 'selectors/subscription'

// COMPONENTS
import Header from 'components/Header'
import Button from 'components/Button'
import Card from 'components/Icon/Card'
import ArrowDown from 'components/Icon/ArrowDown'
import BoldText from 'components/LayoutStep/BoldText'

const Subscription = styled(Col)`
  margin-top: 40px;

  p {
    font-size: 18px;
  }
`

const Layout = styled(Grid)`
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  background: var(${props => props.background});
`

const TextFinalMessage = styled.div`
  color: var(--white-true);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

const TextRecapEmail = styled.div`
  color: var(--white-true);
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
`

const LoaderWrapper = styled.div`
  background-color: var(--booger);
  padding: 10px;
  border-radius: 30%;
`

const Loader = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 0.25rem solid rgba(255, 255, 255, 0.25);
  border-top-color: #ffffff;
  animation: spin 1s infinite linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const ErrorText = styled.div`
  margin: 15% 0 5% 0;
  font-size: 18px;
  line-height: 26px;
  text-align: justify;
  display: block;
`
const SmallError = styled.div`
  margin-top: 30px;
  font-size: 14px;
`

export class Landing extends React.Component {
  render() {
    const { match, subscriptions } = this.props

    return (
      <Layout background="--background">
        <Row center="xs" start="lg">
          <Col xs={12}>
            <Header hideMenu={match.params.type === 'stop'} />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            {match.params.type === 'stop' && (
              <div>
                <Row center="xs">
                  <Col xs={12} sm={4}>
                    <ErrorText>
                      <BoldText>Titre</BoldText>
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris lobortis ante felis, eu varius ligula iaculis at.
                      Nullam id convallis nibh, id gravida felis. Curabitur nunc
                      metus, gravida tempor mauris eget, bibendum porta metus.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Nullam fermentum, elit sit
                      amet tincidunt gravida, elit nisi ornare mauris, non
                      condimentum mi ligula et erat. Duis eget urna arcu.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Praesent aliquet
                      porttitor sem, in maximus ligula. Maecenas tellus mi,
                      placerat vitae ultrices in, porta at justo. Integer et
                      tincidunt enim. Morbi rutrum, est vitae rutrum sagittis,
                      nunc ante tincidunt mi, eu bibendum neque dolor eget
                      velit. Phasellus luctus neque nec lorem mattis, gravida
                      viverra felis semper. In sagittis eros dolor, et varius
                      tellus fermentum quis. Nullam semper blandit tortor in
                      iaculis. In quis pharetra lorem. Nunc nec metus tortor.
                      Duis id augue eget risus faucibus imperdiet nec et quam.
                      Nullam a nulla sed quam consectetur tincidunt sed id
                      magna. Quisque rutrum, lorem at rutrum cursus, odio nisl
                      posuere turpis, quis venenatis justo ex eget leo.
                      Suspendisse pharetra tortor ante, elementum sodales augue
                      mattis a. Proin felis ligula, consequat nec elit in,
                      lacinia ultrices nulla. Vivamus egestas quis velit dapibus
                      gravida. Phasellus tincidunt porta urna, eu euismod diam
                      maximus id. Fusce aliquet nunc ac urna pulvinar feugiat.
                      Curabitur non justo eget erat cursus hendrerit ac nec
                      erat. Etiam placerat ornare diam, a aliquet risus.
                      Maecenas sit amet tincidunt neque. Morbi ac aliquam
                      turpis. Curabitur ultrices viverra purus, sit amet
                      fringilla ante finibus ac. Integer imperdiet libero quis
                      nulla posuere venenatis. Suspendisse eget justo risus.
                      Nunc a aliquet nibh, quis viverra diam. Proin convallis
                      accumsan neque dapibus pharetra. Sed vitae consequat ex,
                      vitae fermentum ligula. Aliquam pharetra tortor quis nibh
                      eleifend, ac accumsan enim pulvinar. In hac habitasse
                      platea dictumst. Nam arcu erat, auctor sed condimentum eu,
                      mollis at ipsum. Maecenas porta bibendum finibus. Nulla et
                      dapibus ligula. Ut efficitur posuere auctor. In id cursus
                      arcu, at dignissim dui. Morbi mattis vulputate neque, id
                      tincidunt nisi fermentum et. Donec et tellus condimentum,
                      dictum nisl sit amet, facilisis eros. Cras a iaculis dui.
                      Sed neque augue, cursus et hendrerit ut, sodales fermentum
                      nulla. Ut dignissim, nisi quis faucibus feugiat, metus
                      ligula lacinia sem, in euismod sapien turpis vitae elit.
                      Nulla gravida, erat in vulputate tristique, arcu sapien
                      elementum justo, nec tempor turpis est id libero.
                      Curabitur posuere turpis risus, ac tempor ligula tincidunt
                      sed. Nunc risus nisl, viverra ac tortor nec, molestie
                      malesuada metus. Fusce suscipit aliquam elit, volutpat
                      maximus elit ultrices ultricies. Nam blandit faucibus
                      turpis, blandit accumsan arcu elementum at. Nam nec lacus
                      id risus auctor lobortis. Class aptent taciti sociosqu ad
                      litora torquent per conubia nostra, per inceptos
                      himenaeos. In hac habitasse platea dictumst. Nullam
                      placerat molestie magna, eu semper ipsum. Cras in erat
                      arcu. Etiam pharetra, ante quis ultrices consectetur, mi
                      lorem interdum velit, a volutpat arcu erat nec turpis.
                      Fusce in ipsum ut nisi tincidunt luctus. Sed ut leo ac
                      orci blandit condimentum vitae laoreet ante. Quisque
                      tincidunt quis turpis sit amet blandit. Maecenas sit amet
                      arcu rhoncus elit semper laoreet vel non nisl.
                      <br />
                    </ErrorText>
                  </Col>
                </Row>
                <Row>
                  <Col>.</Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Layout>
    )
  }
}

Landing.propTypes = {
  match: PropTypes.object,
  path: PropTypes.object,
  dispatchSlimpayTokenValid: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  path: makeSelectPath(),
  subscriptions: makeSelectSubscriptionData()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchSlimpayTokenValid: () => dispatch(getValidTokenSlimpay()),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
