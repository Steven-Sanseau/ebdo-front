import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import { injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import { compose } from 'redux'

import { makeSelectPayementMethod } from 'selectors/checkout'
import { setPayementMethod } from 'actions/checkout'
import { makeSelectTokenIsLoading, makeSelectToken } from 'selectors/token'
import { postToken, setTokenStripe } from 'actions/token'

import InputCheckbox from 'components/InputCheckbox'
import CBIcon from 'components/Icon/CBIcon'
import SepaIcon from 'components/Icon/SepaIcon'
import ToggleStep from 'components/ToggleStep/Loadable'
import StripeForm from 'components/StripeForm'
import SlimpayForm from 'components/SlimpayForm'

class PaymentStep extends React.Component {
  constructor(props) {
    super(props)

    this.handlePaiementMethod = this.handlePaiementMethod.bind(this)
    this.handleSubmitStripeForm = this.handleSubmitStripeForm.bind(this)
    this.handleChangeStripeForm = this.handleChangeStripeForm.bind(this)
    this.handleNextStep = this.handleNextStep.bind(this)
  }

  handlePaiementMethod(value) {
    this.props.dispatchSetPayementMethod(value)
  }

  handleChangeStripeForm(event) {
    console.log(event)
    this.getStripeToken()
  }

  handleSubmitStripeForm(event) {
    this.props.stripe.createToken(name).then(({ token }) => {
      this.props.dispatchSetTokenStripe(token)
    })
  }

  getStripeToken() {
    if (!this.props.token.tokenStripe.id) {
      this.props.stripe.createToken().then(result => {
        if (result.error) {
          console.log(result.error)
        }

        this.props.dispatchSetTokenStripe(result.token)
      })
    }
  }

  handleNextStep(event) {
    event.preventDefault()
    this.getStripeToken()
    //
    // this.props.dispatchPostToken()
    // this.props.nextStep()
  }

  contentOpen() {
    const { payementMethod, token } = this.props
    console.log(token)
    return (
      <div>
        <Row start="xs">
          <Col xs={12}>
            <Row>
              <Col lg={6} xs={12}>
                <InputCheckbox
                  text="Prélèvement SEPA"
                  onCheck={this.handlePaiementMethod}
                  isChecked={payementMethod === 1}
                  icon={<SepaIcon />}
                  valueCheck={1}
                />
              </Col>
              <Col lg={6} xs={12}>
                <InputCheckbox
                  text="Carte Banquaire"
                  onCheck={this.handlePaiementMethod}
                  isChecked={payementMethod === 2}
                  icon={<CBIcon />}
                  valueCheck={2}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        {payementMethod === 1 && (
          <Row>
            <Col xs={6}>
              <SlimpayForm />
            </Col>
          </Row>
        )}
        {payementMethod === 2 && (
          <Row>
            <Col xs={12}>
              <StripeForm
                handleChange={this.handleChangeStripeForm}
                handleSubmit={this.handleSubmitStripeForm}
              />
            </Col>
          </Row>
        )}
      </div>
    )
  }

  contentClose() {
    const { payementMethod } = this.props
    return (
      <div>
        Je souhaite regler mon abonnement par
        {payementMethod === 1 && <span>prélèvement SEPA</span>}
        {payementMethod === 2 && <span>carte bancaire</span>}
      </div>
    )
  }

  render() {
    const { currentStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je choisis mon mode de paiement"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
      />
    )
  }
}

PaymentStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func,
  stripe: PropTypes.object,
  dispatchSetTokenStripe: PropTypes.func,
  dispatchPostToken: PropTypes.func,
  dispatchSetPayementMethod: PropTypes.func,
  payementMethod: PropTypes.number,
  token: PropTypes.object,
  tokenIsLoading: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  payementMethod: makeSelectPayementMethod(),
  tokenIsLoading: makeSelectTokenIsLoading(),
  token: makeSelectToken()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetPayementMethod: method => dispatch(setPayementMethod(method)),
    dispatchSetTokenStripe: token => dispatch(setTokenStripe(token)),
    dispatchPostToken: () => dispatch(postToken())
  }
}

export default injectStripe(
  connect(mapStateToProps, mapDispatchToProps)(PaymentStep)
)
