import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import { injectStripe } from 'react-stripe-elements'

import InputCheckbox from 'components/InputCheckbox'
import CBIcon from 'components/Icon/CBIcon'
import SepaIcon from 'components/Icon/SepaIcon'

import ToggleStep from '../ToggleStep/Loadable'

import StripeForm from './StripeForm'
import SlimpayForm from './SlimpayForm'

class PaymentStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      paiementMethod: 1,
      tokenCard: ''
    }

    this.handlePaiementMethod = this.handlePaiementMethod.bind(this)
    this.handlePaiementInfo = this.handlePaiementInfo.bind(this)
  }

  handlePaiementMethod(value) {
    this.setState({ paiementMethod: value })
  }

  handlePaiementInfo(event) {
    event.preventDefault()

    this.props.stripe.createToken().then(({ token }) => {
      this.setState({ tokenCard: token })
    })
  }

  contentOpen() {
    const { paiementMethod } = this.state
    return (
      <div>
        <Row start="xs">
          <Col xs={12}>
            <Row>
              <Col lg={6} xs={12}>
                <InputCheckbox
                  text="Prélèvement SEPA"
                  onCheck={this.handlePaiementMethod}
                  isChecked={paiementMethod === 1}
                  icon={<SepaIcon />}
                  valueCheck={1}
                />
              </Col>
              <Col lg={6} xs={12}>
                <InputCheckbox
                  text="Carte Banquaire"
                  onCheck={this.handlePaiementMethod}
                  isChecked={paiementMethod === 2}
                  icon={<CBIcon />}
                  valueCheck={2}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        {paiementMethod === 1 && (
          <Row>
            <Col xs={6}>
              <SlimpayForm />
            </Col>
          </Row>
        )}
        {paiementMethod === 2 && (
          <Row>
            <Col xs={12}>
              <form onSubmit={this.handlePaiementInfo}>
                <StripeForm />
              </form>
            </Col>
          </Row>
        )}
      </div>
    )
  }

  contentClose() {
    return (
      <div>
        Je souhaite regler mon abonnement par <b>carte bancaire</b>
      </div>
    )
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je choisis mon mode de paiement"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={nextStep}
      />
    )
  }
}

PaymentStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func,
  stripe: PropTypes.object
}

export default injectStripe(PaymentStep)
