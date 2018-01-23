import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'
import { Elements } from 'react-stripe-elements'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// SELECTOR
import { makeSelectStep } from 'selectors/step'
import { makeSelectLogin } from 'selectors/login'
import { nextStep, goToStep } from 'actions/step'
import { newCheckout } from 'actions/checkout'
import { makeSelectClientExist } from 'selectors/client'
import { makeIsLoggedIn } from 'selectors/login'

// CONTAINERS
import FormulaStep from 'containers/Step/FormulaStep/Loadable'
import EmailStep from 'containers/Step/EmailStep/Loadable'
import EmailConfirmStep from 'containers/Step/EmailConfirmStep'
import DeliveryStep from 'containers/Step/DeliveryStep/Loadable'
import PaymentStep from 'containers/Step/PaymentStep/Loadable'
import GodsonEmailStep from 'containers/Step/GodsonEmailStep/Loadable'

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

  nextStep() {
    this.props.nextStep()
  }

  changeStep(stepNumber) {
    this.props.goToStep(stepNumber)
  }

  render() {
    const { step, clientExist, isLoggedIn } = this.props

    let steps = [
      <FormulaStep
        stepNumber={1}
        changeStep={this.changeStep}
        nextStep={this.nextStep}
        currentStep={step}
      />,
      <EmailStep
        stepNumber={2}
        changeStep={this.changeStep}
        nextStep={this.nextStep}
        currentStep={step}
        isOfferStep
      />
    ]

    if (clientExist && !isLoggedIn) {
      steps.push(
        <EmailConfirmStep
          stepNumber={3}
          changeStep={this.changeStep}
          nextStep={this.nextStep}
          currentStep={step}
        />
      )
    }

    steps = steps.concat([
      <GodsonEmailStep
        stepNumber={steps.length + 1}
        changeStep={this.changeStep}
        nextStep={this.nextStep}
        currentStep={step}
      />,
      <DeliveryStep
        stepNumber={steps.length + 2}
        changeStep={this.changeStep}
        nextStep={this.nextStep}
        currentStep={step}
        isOffer
      />,
      <Elements>
        <PaymentStep
          stepNumber={steps.length + 3}
          changeStep={this.changeStep}
          nextStep={this.nextStep}
          currentStep={step}
        />
      </Elements>
    ])

    return (
      <div>
        <Layout>
          <Helmet>
            <title>Offrir ebdo à un proche</title>
            <meta
              name="description"
              content="Offrir un abonnement ebdo à un proche"
            />
          </Helmet>
          <Row center="xs" start="lg">
            <Col xs={12}>
              <Header />
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

Offer.propTypes = {
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  nextStep: PropTypes.func,
  dispatchNewCheckout: PropTypes.func,
  goToStep: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  step: makeSelectStep(),
  login: makeSelectLogin(),
  clientExist: makeSelectClientExist(),
  isLoggedIn: makeIsLoggedIn()
})

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    dispatchNewCheckout: () => dispatch(newCheckout()),
    goToStep: step => dispatch(goToStep(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Offer)
