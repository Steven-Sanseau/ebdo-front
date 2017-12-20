import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'
import { Elements } from 'react-stripe-elements'
// import idx from 'idx'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'

// SELECTOR
import { makeSelectStep } from 'selectors/step'
import { nextStep, goToStep } from 'actions/step'

// REDUCERS
import checkoutReducer from 'reducers/checkout'
import offerReducer from 'reducers/offer'
import clientReducer from 'reducers/client'
import tokenReducer from 'reducers/token'
import addressReducer from 'reducers/address'
import stepReducer from 'reducers/step'

// SAGA
import sagaOffer from 'saga/offer'
import sagaCheckout from 'saga/checkout'
import sagaToken from 'saga/token'
import sagaAddress from 'saga/address'
import sagaClient from 'saga/client'

// CONTAINERS
import FormulaStep from 'containers/FormulaStep/Loadable'
import CountryStep from 'containers/CountryStep/Loadable'
import EmailStep from 'containers/EmailStep/Loadable'
import DeliveryStep from 'containers/DeliveryStep/Loadable'
import PaymentStep from 'containers/PaymentStep/Loadable'
import ConfirmStep from 'containers/ConfirmStep/Loadable'

// COMPONENTS
import Header from 'components/Header'
import Layout from 'containers/Checkout/Layout'

export class Checkout extends React.Component {
  constructor(props) {
    super(props)

    this.nextStep = this.nextStep.bind(this)
    this.changeStep = this.changeStep.bind(this)
  }

  // componentDidMount() {}

  nextStep() {
    this.props.nextStep()
  }

  changeStep(stepNumber) {
    this.props.goToStep(stepNumber)
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
            <Col mdOffset={1} xs={12} md={11}>
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
              <CountryStep
                stepNumber={2}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <EmailStep
                stepNumber={3}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <DeliveryStep
                stepNumber={4}
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
                  stepNumber={5}
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
                stepNumber={6}
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

Checkout.propTypes = {
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  nextStep: PropTypes.func,
  goToStep: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  step: makeSelectStep()
})

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    goToStep: step => dispatch(goToStep(step))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducerOffer = injectReducer({
  key: 'offer',
  reducer: offerReducer
})

const withReducerClient = injectReducer({
  key: 'client',
  reducer: clientReducer
})

const withReducerAddress = injectReducer({
  key: 'address',
  reducer: addressReducer
})

const withReducerStep = injectReducer({
  key: 'step',
  reducer: stepReducer
})

const withReducerToken = injectReducer({
  key: 'token',
  reducer: tokenReducer
})

const withReducerCheckout = injectReducer({
  key: 'checkout',
  reducer: checkoutReducer
})

const withSagaOffer = injectSaga({ key: 'offer', saga: sagaOffer })
const withSagaToken = injectSaga({ key: 'token', saga: sagaToken })
const withSagaCheckout = injectSaga({ key: 'checklout', saga: sagaCheckout })
const withSagaClient = injectSaga({ key: 'client', saga: sagaClient })
const withSagaAddress = injectSaga({ key: 'address', saga: sagaAddress })

export default compose(
  withReducerOffer,
  withReducerCheckout,
  withReducerClient,
  withReducerAddress,
  withReducerStep,
  withReducerToken,
  withSagaOffer,
  withSagaToken,
  withSagaCheckout,
  withSagaAddress,
  withSagaClient,
  withConnect
)(Checkout)
