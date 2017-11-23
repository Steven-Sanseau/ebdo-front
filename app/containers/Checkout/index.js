import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { Row, Col } from 'react-flexbox-grid'

import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import makeSelectCheckout from './selectors'
import reducer from './reducer'
import saga from './saga'
// import { injectStripe } from 'react-stripe-elements'

import FormulaStep from '../../components/FormulaStep/Loadable'
import StartStep from '../../components/StartStep/Loadable'
import VoucherStep from '../../components/VoucherStep/Loadable'
import EmailStep from '../../components/EmailStep/Loadable'
import DeliveryStep from '../../components/DeliveryStep/Loadable'
import PaymentStep from '../../components/PaymentStep/Loadable'

import Header from '../../components/Header'
import Layout from './Layout'

export class Checkout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 2
    }

    this.nextStep = this.nextStep.bind(this)
    this.changeStep = this.changeStep.bind(this)
  }

  nextStep() {
    const { step } = this.state
    this.setState({ step: step + 1 })
  }

  changeStep(stepElem) {
    this.setState({ step: stepElem })
  }

  handleSubmit = ev => {
    ev.preventDefault()

    // this.props.stripe.createToken({ name: 'Jenny Rosen' }).then(({ token }) => {
    //   console.log('Received Stripe token:', token)
    // })
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
              <StartStep
                stepNumber={2}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <VoucherStep
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
              <PaymentStep
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
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout()
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
