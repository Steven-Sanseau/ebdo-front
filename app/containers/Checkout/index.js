import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'
import { Elements } from 'react-stripe-elements'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// SELECTOR
import { makeSelectClientExist } from 'selectors/client'
import { makeSelectStep } from 'selectors/step'
import { makeSelectPath } from 'selectors/route'
import { makeIsLoggedIn } from 'selectors/login'
import { makeSelectSubscriptionData } from 'selectors/subscription'
import { nextStep, goToStep } from 'actions/step'
import { getValidTokenSlimpay } from 'actions/token'
import { newCheckout } from 'actions/checkout'

// CONTAINERS
import FormulaStep from 'containers/Step/FormulaStep/Loadable'
import CountryStep from 'containers/Step/CountryStep/Loadable'
import EmailStep from 'containers/Step/EmailStep/Loadable'
import DeliveryStep from 'containers/Step/DeliveryStep/Loadable'
import PaymentStep from 'containers/Step/PaymentStep/Loadable'
import ConfirmStep from 'containers/Step/ConfirmStep/Loadable'
import EmailConfirmStep from 'containers/Step/EmailConfirmStep/Loadable'

// COMPONENTS
import Header from 'components/Header'
import Layout from 'containers/Checkout/Layout'

import { push } from 'react-router-redux'

export class Checkout extends React.Component {
  constructor(props) {
    super(props)

    this.nextStep = this.nextStep.bind(this)
    this.changeStep = this.changeStep.bind(this)
  }

  componentWillMount() {
    if (this.props.subscriptions) {
      this.props.subscriptions.map(subscription => {
        if (subscription.status === '01') {
          this.props.goToAboExist()
        }
      })
    } else {
      if (this.props.path.search.indexOf('?slimpay=valid') !== -1) {
        this.props.dispatchSlimpayTokenValid()
      } else {
        this.props.dispatchNewCheckout()
      }
    }
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
      <CountryStep
        stepNumber={2}
        changeStep={this.changeStep}
        nextStep={this.nextStep}
        currentStep={step}
      />,
      <EmailStep
        stepNumber={3}
        changeStep={this.changeStep}
        nextStep={this.nextStep}
        currentStep={step}
      />
    ]

    if (clientExist && !isLoggedIn) {
      steps.push(
        <EmailConfirmStep
          stepNumber={4}
          changeStep={this.changeStep}
          nextStep={this.nextStep}
          currentStep={step}
        />
      )
    }

    // TODO Remove delivery step if the user already has an address
    steps = steps.concat([
      <DeliveryStep
        stepNumber={steps.length + 1}
        changeStep={this.changeStep}
        nextStep={this.nextStep}
        currentStep={step}
      />,
      <Elements>
        <PaymentStep
          stepNumber={steps.length + 2}
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
            <title>Soutenir ebdo</title>
            <meta name="description" content="Abonnement à ebdo le journal" />
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

Checkout.propTypes = {
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  dispatchNewCheckout: PropTypes.func,
  dispatchSlimpayTokenValid: PropTypes.func,
  nextStep: PropTypes.func,
  goToStep: PropTypes.func,
  path: PropTypes.object,
  isLoggedIn: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  step: makeSelectStep(),
  clientExist: makeSelectClientExist(),
  path: makeSelectPath(),
  subscriptions: makeSelectSubscriptionData(),
  isLoggedIn: makeIsLoggedIn()
})

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    dispatchNewCheckout: () => dispatch(newCheckout()),
    dispatchSlimpayTokenValid: () => dispatch(getValidTokenSlimpay()),
    goToStep: step => dispatch(goToStep(step)),
    goToAboExist: () => dispatch(push('abo/existe'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
