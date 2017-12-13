import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'
import { Elements } from 'react-stripe-elements'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import {
  makeSelectCheckout,
  makeSelectClient
} from 'containers/Checkout/selectors'
import reducer from 'containers/Checkout/reducer'
import saga from 'containers/Checkout/saga'

import FormulaStep from 'components/FormulaStep/Loadable'
import EmailStep from 'containers/EmailStep/Loadable'
import DeliveryStep from 'components/DeliveryStep/Loadable'
import PaymentStep from 'components/PaymentStep/Loadable'

import Header from 'components/Header'
import Layout from 'containers/Checkout/Layout'

export class Checkout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 3
    }

    this.nextStep = this.nextStep.bind(this)
    this.handleEmailNextStep = this.handleEmailNextStep.bind(this)
    this.changeStep = this.changeStep.bind(this)
  }

  componentDidMount() {}

  handleEmailNextStep(email) {
    this.nextStep()
  }

  nextStep() {
    const { step } = this.state
    this.setState({ step: step + 1 })
  }

  changeStep(stepElem) {
    this.setState({ step: stepElem })
  }

  render() {
    const { step } = this.state
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
              <EmailStep
                stepNumber={3}
                changeStep={this.changeStep}
                nextStep={this.handleEmailNextStep}
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
        </Layout>
      </div>
    )
  }
}

Checkout.propTypes = {
  checkout: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  client: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout(),
  client: makeSelectClient()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({ key: 'checkout', reducer })
const withSaga = injectSaga({ key: 'checkout', saga })

export default compose(withReducer, withSaga, withConnect)(Checkout)
