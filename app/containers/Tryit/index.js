import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { newCheckoutTry } from 'actions/checkout'
import { nextStep, goToStep } from 'actions/step'

import { makeSelectStep } from 'selectors/step'
import { makeSelectSubscriptionData } from 'selectors/subscription'
import { makeSelectClientExist } from 'selectors/client'
import { makeIsLoggedIn } from 'selectors/login'

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
const TryTextCol = styled(Col)`
  margin-top: 10%;
`

export class Tryit extends React.Component {
  constructor(props) {
    super(props)

    this.nextStep = this.nextStep.bind(this)
    this.changeStep = this.changeStep.bind(this)
  }

  componentWillMount = () => {
    this.props.dispatchNewCheckoutTry()
  }

  nextStep = () => {
    this.props.nextStep()
  }

  changeStep = stepNumber => {
    this.props.goToStep(stepNumber)
  }

  render() {
    const { step, clientExist, isLoggedIn } = this.props

    let steps = [
      <EmailStep
        stepNumber={1}
        changeStep={this.changeStep}
        nextStep={this.nextStep}
        currentStep={step}
        isFreeNumberStep
      />
    ]

    if (!isLoggedIn) {
      steps.push(
        <EmailConfirmStep
          stepNumber={2}
          changeStep={this.changeStep}
          nextStep={this.nextStep}
          currentStep={step}
        />
      )
    }

    steps = steps.concat([
      <DeliveryStep
        stepNumber={steps.length + 1}
        changeStep={this.changeStep}
        nextStep={this.nextStep}
        currentStep={step}
        displayDeliveryAddress={false}
        isFreeNumberStep
      />,
      <ConfirmStep
        stepNumber={steps.length + 2}
        changeStep={this.changeStep}
        nextStep={this.nextStep}
        currentStep={step}
      />
    ])

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
                <Col md={3} mdOffset={2} xs={12}>
                  <img
                    src="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/tryebdo.png&w=400&t=fit&il"
                    alt="Je veux recevoir un numéro gratuit de ebdo"
                    width="100%"
                  />
                </Col>
                <TryTextCol md={5} xs={12}>
                  <BigBoldText>
                    Vous voulez <VioletText>essayer ebdo ?</VioletText> <br />
                    On vous offre le prochain numéro.
                  </BigBoldText>
                  <TextSummary>
                    Vous nous laissez vos coordonnées, <BoldText>ebdo</BoldText>
                    <br />
                    vous fait parvenir son nouveau numéro vendredi prochain.
                  </TextSummary>
                </TryTextCol>
              </Row>
            </Col>
          </Row>
          {steps.map((step, index) => (
            <Row key={index}>
              <Col xs={12}>{step}</Col>
            </Row>
          ))}
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
  step: makeSelectStep(),
  clientExist: makeSelectClientExist(),
  isLoggedIn: makeIsLoggedIn()
})

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    dispatchNewCheckoutTry: () => dispatch(newCheckoutTry()),
    goToStep: step => dispatch(goToStep(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tryit)
