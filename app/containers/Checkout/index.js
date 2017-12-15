import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'
import { Elements } from 'react-stripe-elements'
// import idx from 'idx'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import { makeSelectStep } from 'containers/Checkout/selectors'
import { nextStep, goToStep } from 'containers/Checkout/actions'
import reducer from 'containers/Checkout/reducer'
import saga from 'containers/Checkout/saga'

import FormulaStep from 'components/FormulaStep/Loadable'
import EmailStep from 'containers/EmailStep/Loadable'
import DeliveryStep from 'containers/DeliveryStep/Loadable'
import PaymentStep from 'components/PaymentStep/Loadable'

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
              <Elements>
                <PaymentStep
                  stepNumber={4}
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
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  // client: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  nextStep: PropTypes.func,
  goToStep: PropTypes.func
  // dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  step: makeSelectStep()
  // checkout: makeSelectCheckout(),
  // client: makeSelectClient()
})

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    goToStep: step => dispatch(goToStep(step)),
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({ key: 'checkout', reducer })
const withSaga = injectSaga({ key: 'checkout', saga })

export default compose(withReducer, withSaga, withConnect)(Checkout)
