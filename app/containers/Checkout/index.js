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
          {/* <Row>
            <Col xs={12}>
              <EmailConfirmStep
                stepNumber={4}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row> */}
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
  pathName: makeSelectPathName()
})

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    dispatchNewCheckout: () => dispatch(newCheckout()),
    goToStep: step => dispatch(goToStep(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
