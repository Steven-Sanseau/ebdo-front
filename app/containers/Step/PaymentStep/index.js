import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import { injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectPayementMethod } from 'selectors/checkout'
import { setPayementMethod } from 'actions/checkout'
import {
  makeSelectTokenIsLoading,
  makeSelectTokenIsSetError,
  makeSelectTokenMessageError,
  makeSelectIframeContent
} from 'selectors/token'

import { makeSelectOffer } from 'selectors/offer'

import {
  setTokenStripe,
  setTokenStripeLoaded,
  setTokenStripeError
} from 'actions/token'

import InputCheckbox from 'components/InputCheckbox'
import CBIcon from 'components/Icon/CBIcon'
import SepaIcon from 'components/Icon/SepaIcon'
import ToggleStep from 'components/ToggleStep/Loadable'
import StripeForm from 'components/StripeForm'
import SlimpayForm from 'components/SlimpayForm'

class PaymentStep extends React.Component {
  constructor(props) {
    super(props)

    this.handleNextStep = this.handleNextStep.bind(this)
  }

  getStripeToken = () => {
    this.props.dispatchSetTokenStripe()
    this.props.stripe.createToken().then(result => {
      if (result.error) {
        this.props.dispatchSetTokenError(result)
      }
      if (result.token) {
        this.props.dispatchSetTokenStripeLoaded(result.token)
      }
    })
  }

  handleChangeStripeForm = () => {}

  handleSubmitStripeForm = () => {
    this.getStripeToken()
  }

  handlePaiementMethod = value => {
    this.props.dispatchSetPayementMethod(value)
  }

  handleNextStep = event => {
    event.preventDefault()
    this.getStripeToken()
  }

  handleGoToSlimpay = () => {
    const { slimpayIframe } = this.props

    if (slimpayIframe && slimpayIframe.href) {
      window.location.href = slimpayIframe.href
    }
  }

  contentOpen() {
    const {
      payementMethod,
      tokenMessageError,
      offer,
      slimpayIframe
    } = this.props

    return (
      <div>
        <Row start="xs">
          <Col xs={12}>
            <Row>
              {!offer.time_limited && (
                <Col lg={6} xs={12}>
                  <InputCheckbox
                    text="Prélèvement SEPA"
                    onCheck={this.handlePaiementMethod}
                    isChecked={payementMethod === 1}
                    icon={<SepaIcon />}
                    valueCheck={1}
                  />
                </Col>
              )}
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
        {payementMethod === 1 &&
          !offer.time_limited && (
            <Row>
              <Col xs={6}>
                Vous allez être redirigé vers notr site partenaire sécurisé pour
                valider votre Mandat de prélèvement
                {/* // IFRAME SLIMPAY TRANSFORMED TO LINK */}
                {/* <div dangerouslySetInnerHTML={{ __html: slimpayIframe }} /> */}
                {/* {slimpayIframe &&
                  slimpayIframe.href && (
                    <a href={slimpayIframe.href}>Enregistrer mon mandat</a>
                  )} */}
                {tokenMessageError}
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
              {tokenMessageError}
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
    const {
      currentStep,
      changeStep,
      stepNumber,
      tokenIsLoading,
      payementMethod,
      offer
    } = this.props

    return (
      <ToggleStep
        title="Je choisis mon mode de paiement"
        stepNumber={stepNumber}
        iconName="card"
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={
          payementMethod === 1 && !offer.time_limited
            ? this.handleGoToSlimpay
            : this.handleNextStep
        }
        isLoadingNextStep={tokenIsLoading}
        textButtonNextStep={
          payementMethod === 1 && !offer.time_limited
            ? 'Payer'
            : 'Récapituler la commande'
        }
      />
    )
  }
}

PaymentStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  stripe: PropTypes.object,
  dispatchSetTokenStripe: PropTypes.func,
  dispatchSetTokenStripeLoaded: PropTypes.func,
  dispatchSetTokenError: PropTypes.func,
  dispatchSetPayementMethod: PropTypes.func,
  payementMethod: PropTypes.number,
  tokenIsLoading: PropTypes.bool,
  tokenIsError: PropTypes.bool,
  tokenMessageError: PropTypes.string,
  offer: PropTypes.object,
  slimpayIframe: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  payementMethod: makeSelectPayementMethod(),
  tokenIsLoading: makeSelectTokenIsLoading(),
  tokenMessageError: makeSelectTokenMessageError(),
  tokenIsError: makeSelectTokenIsSetError(),
  offer: makeSelectOffer(),
  slimpayIframe: makeSelectIframeContent()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetPayementMethod: method => dispatch(setPayementMethod(method)),
    dispatchSetTokenStripe: () => dispatch(setTokenStripe()),
    dispatchSetTokenStripeLoaded: token =>
      dispatch(setTokenStripeLoaded(token)),
    dispatchSetTokenError: error => dispatch(setTokenStripeError(error))
  }
}

export default injectStripe(
  connect(mapStateToProps, mapDispatchToProps)(PaymentStep)
)
