import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'
import { Elements } from 'react-stripe-elements'
// import idx from 'idx'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// SELECTOR
import { makeSelectStep } from 'selectors/step'
import { nextStep, goToStep } from 'actions/step'
import { newCheckout } from 'actions/checkout'

// CONTAINERS
import CodeGiftStep from 'containers/Step/CodeGiftStep/Loadable'
import EmailStep from 'containers/Step/EmailStep/Loadable'
import DeliveryStep from 'containers/Step/DeliveryStep/Loadable'
import ConfirmStep from 'containers/Step/ConfirmStep/Loadable'

// COMPONENTS
import Header from 'components/Header'
import Layout from 'containers/Checkout/Layout'

import ButtonSticky from 'components/StickyHelpCheckout'

export class Gift extends React.Component {
  componentDidMount() {
    // this.props.dispatchNewCheckout()
  }

  nextStep = () => {
    this.props.nextStep()
  }

  changeStep = stepNumber => {
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
              <CodeGiftStep
                stepNumber={1}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <EmailStep
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
          <ButtonSticky handleRoute={this.handleRouteButtonHelp} />
        </Layout>
      </div>
    )
  }
}

Gift.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Gift)