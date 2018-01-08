import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectStep } from 'selectors/step'
import { makeSelectLogin } from 'selectors/login'
import { newCheckoutTry } from 'actions/checkout'
import { makeSelectSubscriptionData } from 'selectors/subscription'
import { nextStep, goToStep } from 'actions/step'

// CONTAINERS
import EmailConfirmStep from 'containers/Step/EmailConfirmStep/Loadable'
import EmailStep from 'containers/Step/EmailStep/Loadable'
import DeliveryStep from 'containers/Step/DeliveryStep/Loadable'
import ConfirmStep from 'containers/Step/ConfirmStep/Loadable'

// COMPONENTS
import Header from 'components/Header'
import Layout from 'containers/Checkout/Layout'
import VioletText from 'components/LayoutStep/VioletText'
import BigBoldText from 'components/LayoutStep/BigBoldText'
import BoldText from 'components/LayoutStep/BoldText'
import TextSummary from 'components/LayoutStep/TextSummary'
import Image from 'components/Image'

import ButtonSticky from 'components/StickyHelpCheckout'

import '!file-loader?name=[name].[ext]!images/0-couv.jpg'
const Undercover = styled.div`
  img {
    ${'' /* position: absolute; */} top: 0;
    left: 0;
    z-index: -1;
    border-top: 1px solid var(--grey-blue);
  }
  .fond {
    ${'' /* position: absolute; */} width: 100%;
    height: 100%;
    top: 0;
    background: white;
    border: 1px solid var(--grey-blue);
    border-bottom-width: 0;
    transition: transform 0.3s ease-out;
    &:nth-of-type(1) {
      z-index: -2;
      left: 3px;
    }
    &:nth-of-type(2) {
      z-index: -3;
      left: 6px;
    }
    &:nth-of-type(3) {
      z-index: -4;
      left: 9px;
    }
    &:nth-of-type(4) {
      z-index: -5;
      left: 12px;
    }
    &:nth-of-type(5) {
      z-index: -6;
      left: 15px;
    }
  }
`
export class Tryit extends React.Component {
  constructor(props) {
    super(props)

    this.nextStep = this.nextStep.bind(this)
    this.changeStep = this.changeStep.bind(this)
  }

  componentWillMount() {
    this.props.dispatchNewCheckoutTry()
  }

  nextStep() {
    this.props.nextStep()
  }

  changeStep(stepNumber) {
    this.props.goToStep(stepNumber)
  }

  handleRouteButtonHelp = event => {
    console.log('HELP CLIC')
  }

  render() {
    const { step } = this.props

    return (
      <div>
        <Layout>
          <Helmet>
            <title>Soutenir ebdo</title>
            <meta name="description" content="Abonnement à ebdo le journal" />
          </Helmet>
          <Row center="xs" start="lg">
            <Col xs={12}>
              <Header />
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12}>
              <Row start="lg" center="xs">
                <Col lg={2} lgOffset={3} xs={12}>
                  <Undercover>
                    <img src="0-couv.jpg" alt="sommaire" width="100%" />
                    <div className="fond" />
                    <div className="fond" />
                    <div className="fond" />
                    <div className="fond" />
                  </Undercover>
                </Col>
                <Col lg={5} xs={12}>
                  <BigBoldText>
                    Vous voulez <VioletText>essayer ebdo ?</VioletText> <br />
                    On vous offre le prochain numéro.
                  </BigBoldText>
                  <TextSummary>
                    Vous nous laissez vos coordonnées, <BoldText>ebdo</BoldText>
                    <br />
                    vous fait parvenir son nouveau numéro vendredi prochain.
                  </TextSummary>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <EmailStep
                stepNumber={1}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <EmailConfirmStep
                stepNumber={2}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <DeliveryStep
                stepNumber={3}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
                displayDeliveryAddress={false}
                isFreeNumberStep
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ConfirmStep
                stepNumber={4}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
        </Layout>
      </div>
    )
  }
}

Tryit.propTypes = {
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  dispatchNewCheckoutTry: PropTypes.func,
  nextStep: PropTypes.func,
  goToStep: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  step: makeSelectStep()
})

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    dispatchNewCheckoutTry: () => dispatch(newCheckoutTry()),
    goToStep: step => dispatch(goToStep(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tryit)
