import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'
import { Elements } from 'react-stripe-elements'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'

// SELECTOR
import { makeSelectStep } from 'selectors/step'
import { nextStep, goToStep } from 'actions/step'
import { newCheckout } from 'actions/checkout'

// SAGA
import sagaOffer from 'saga/offer'
import sagaCheckout from 'saga/checkout'
import sagaToken from 'saga/token'
import sagaAddress from 'saga/address'
import sagaClient from 'saga/client'

// CONTAINERS
import FormulaStep from 'containers/Offer/FormulaStep/Loadable'
import InterludeStep from 'containers/Offer/InterludeStep/Loadable'
import CountryStep from 'containers/Offer/CountryStep/Loadable'
import EmailStep from 'containers/Offer/EmailStep/Loadable'
import DeliveryStep from 'containers/Offer/DeliveryStep/Loadable'
import PaymentStep from 'containers/Offer/PaymentStep/Loadable'
import ConfirmStep from 'containers/Offer/ConfirmStep/Loadable'

// COMPONENTS
import Header from 'components/Header'
import Layout from 'containers/Checkout/Layout'

import ButtonSticky from 'components/StickyHelpCheckout'

export class Offer extends React.Component {
  constructor(props) {
    super(props)

    this.nextStep = this.nextStep.bind(this)
    this.changeStep = this.changeStep.bind(this)
  }

  componentDidMount() {
    this.props.dispatchNewCheckout()
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
          <Row>
            <Col xs={12}>
              <FormulaStep
                stepNumber={1}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <InterludeStep
                stepNumber={2}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CountryStep
                stepNumber={3}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <EmailStep
                stepNumber={4}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <DeliveryStep
                stepNumber={5}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Elements>
                <PaymentStep
                  stepNumber={6}
                  changeStep={this.changeStep}
                  nextStep={this.nextStep}
                  currentStep={step}
                />
              </Elements>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ConfirmStep
                stepNumber={7}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <ButtonSticky handleRoute={this.handleRouteButtonHelp} />
        </Layout>
      </div>
    )
  }
}

Offer.propTypes = {
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  nextStep: PropTypes.func,
  dispatchNewCheckout: PropTypes.func,
  goToStep: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  step: makeSelectStep()
})

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    dispatchNewCheckout: () => dispatch(newCheckout()),
    goToStep: step => dispatch(goToStep(step))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withSagaOffer = injectSaga({ key: 'offer', saga: sagaOffer })
const withSagaToken = injectSaga({ key: 'token', saga: sagaToken })
const withSagaCheckout = injectSaga({ key: 'checklout', saga: sagaCheckout })
const withSagaClient = injectSaga({ key: 'client', saga: sagaClient })
const withSagaAddress = injectSaga({ key: 'address', saga: sagaAddress })

export default compose(
  withSagaOffer,
  withSagaToken,
  withSagaCheckout,
  withSagaAddress,
  withSagaClient,
  withConnect
)(Offer)
