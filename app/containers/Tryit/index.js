import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'

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
import sagaAddress from 'saga/address'
import sagaClient from 'saga/client'

// CONTAINERS
import EmailConfirmStep from 'containers/Tryit/EmailConfirmStep/Loadable'
import EmailStep from 'containers/Tryit/EmailStep/Loadable'
import DeliveryStep from 'containers/Tryit/DeliveryStep/Loadable'
import ConfirmStep from 'containers/Tryit/ConfirmStep/Loadable'

// COMPONENTS
import Header from 'components/Header'
import Layout from 'containers/Tryit/Layout'

import ButtonSticky from 'components/StickyHelpCheckout'

export class Tryit extends React.Component {
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

Tryit.propTypes = {
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  dispatchNewCheckout: PropTypes.func,
  nextStep: PropTypes.func,
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

const withSagaClient = injectSaga({ key: 'client', saga: sagaClient })
const withSagaAddress = injectSaga({ key: 'address', saga: sagaAddress })

export default compose(withSagaAddress, withSagaClient, withConnect)(Tryit)
