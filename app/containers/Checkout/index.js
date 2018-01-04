import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'
import { Elements } from 'react-stripe-elements'
import { makeSelectClientExist } from 'selectors/client'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// SELECTOR
import { makeSelectStep } from 'selectors/step'
import { makeSelectPathName } from 'selectors/route'
import { nextStep, goToStep } from 'actions/step'
import { newCheckout } from 'actions/checkout'

// CONTAINERS
import FormulaStep from 'containers/Step/FormulaStep/Loadable'
import CountryStep from 'containers/Step/CountryStep/Loadable'
import EmailStep from 'containers/Step/EmailStep/Loadable'
// import EmailConfirmStep from 'containers/Step/EmailConfirmStep/Loadable'
import DeliveryStep from 'containers/Step/DeliveryStep/Loadable'
import PaymentStep from 'containers/Step/PaymentStep/Loadable'
import ConfirmStep from 'containers/Step/ConfirmStep/Loadable'
import EmailConfirmStep from 'containers/Step/EmailConfirmStep/Loadable'

// COMPONENTS
import Header from 'components/Header'
import Layout from 'containers/Checkout/Layout'

import ButtonSticky from 'components/StickyHelpCheckout'

export class Checkout extends React.Component {
  constructor(props) {
    super(props)

    this.nextStep = this.nextStep.bind(this)
    this.changeStep = this.changeStep.bind(this)
  }

  componentDidMount() {
    this.props.dispatchNewCheckout()
    // TODO Check if subscriptions
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
    const { step, clientExist } = this.props
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

    if (clientExist) {
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
      </Elements>,
      <ConfirmStep
        stepNumber={steps.length + 3}
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
          {steps.map((step, index) => (
            <Row key={index}>
              <Col xs={12}>{step}</Col>
            </Row>
          ))}
          <ButtonSticky handleRoute={this.handleRouteButtonHelp} />
        </Layout>
      </div>
    )
  }
}

Checkout.propTypes = {
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  dispatchNewCheckout: PropTypes.func,
  nextStep: PropTypes.func,
  goToStep: PropTypes.func,
  pathName: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  step: makeSelectStep(),
  clientExist: makeSelectClientExist()
})

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    dispatchNewCheckout: () => dispatch(newCheckout()),
    goToStep: step => dispatch(goToStep(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
