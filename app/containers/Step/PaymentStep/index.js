import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import { injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  makeSelectTokenIsLoading,
  makeSelectTokenIsSetError,
  makeSelectTokenMessageError,
  makeSelectIframeContent,
  makeSelectTokenCardError
} from 'selectors/token'

import { makeSelectOffer } from 'selectors/offer'
import {
  makeSelectPayementMethod,
  makeSelectIsCGVChecked,
  makeSelectIsCheckoutLoading,
  makeSelectCheckoutMessageError
} from 'selectors/checkout'

import {
  setTokenStripe,
  setTokenStripeLoaded,
  setTokenStripeError
} from 'actions/token'

import {
  setCgvConfirm,
  postCheckout,
  setPayementMethod
} from 'actions/checkout'

import InputCheckbox from 'components/InputCheckbox'
import CBIcon from 'components/Icon/CBIcon'
import SepaIcon from 'components/Icon/SepaIcon'
import ToggleStep from 'components/ToggleStep/Loadable'
import StripeForm from 'components/StripeForm'
import ErrorMessage from 'components/InputText/ErrorMessage'
import CheckboxConfirmCheckout from 'components/CheckboxConfirmCheckout'

const ChoicePaymentMethodWrapper = styled.div`
  margin-bottom: 30px;
`
class PaymentStep extends React.Component {
  constructor(props) {
    super(props)
    this.state = { errMessage: '', errorCGV: false, isAnim: false }
  }

  getStripeToken = () => {
    this.setState({ isAnim: true })
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

  handleAnimationEnding = () => {
    this.setState({ isAnim: false })
  }

  handleChangeStripeForm = () => {
    this.props.dispatchSetTokenStripe()
  }

  handleSubmitStripeForm = () => {
    this.handleSubscribe()
  }

  handlePaiementMethod = value => {
    this.props.dispatchSetPayementMethod(value)
  }

  handleGoToSlimpay = () => {
    const { slimpayIframe } = this.props

    if (slimpayIframe && slimpayIframe.href) {
      window.location.href = slimpayIframe.href
    }
  }

  handleCheckboxCGV = event => {
    this.props.dispatchConfirmCGV()
  }

  handleSubscribe = () => {
    this.setState({
      isAnim: true,
      errMessage: '',
      errorCGV: false
    })
    if (this.props.isCGVAccepted) {
      if (this.props.payementMethod === 1) {
        this.handleGoToSlimpay()
      }
      if (this.props.payementMethod === 2) {
        this.getStripeToken()
      }
    } else {
      this.setState({
        errMessage: 'Vous devez acceptez les CGV',
        errorCGV: true
      })
    }
  }

  contentOpen() {
    const {
      payementMethod,
      tokenMessageError,
      checkoutMessageError,
      offer,
      slimpayIframe,
      tokenIsError,
      tokenCardError
    } = this.props

    return (
      <div>
        <ChoicePaymentMethodWrapper>
          <Row start="xs">
            <Col xs={12}>
              <Row>
                {!offer.data.time_limited && (
                  <Col lg={6} xs={12}>
                    <InputCheckbox
                      text="Prélèvement banquaire"
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
        </ChoicePaymentMethodWrapper>
        {payementMethod === 1 &&
          !offer.data.time_limited && (
            <Row>
              <Col xs={12}>
                Vous allez être redirigé vers le site partenaire sécurisé pour
                valider votre Mandat de prélèvement
                {/* // IFRAME SLIMPAY TRANSFORMED TO LINK */}
                {/* <div dangerouslySetInnerHTML={{ __html: slimpayIframe }} /> */}
                {/* {slimpayIframe &&
                  slimpayIframe.href && (
                    <a href={slimpayIframe.href}>Enregistrer mon mandat</a>
                  )} */}
              </Col>
            </Row>
          )}
        {payementMethod === 2 && (
          <Row>
            <Col xs={12}>
              <StripeForm
                error={tokenIsError}
                errorCardType={tokenCardError}
                errorMessage={tokenMessageError}
                handleChange={this.handleChangeStripeForm}
                handleSubmit={this.handleSubmitStripeForm}
              />
              <ErrorMessage>
                {tokenMessageError}
              </ErrorMessage>
            </Col>
          </Row>
        )}
        <div>
          Vérifiez attentivement vos informations avant de confirmer.
          <CheckboxConfirmCheckout
            error={this.state.errorCGV}
            errorMessage={this.state.errMessage}
            handleConfirmCGV={this.handleCheckboxCGV}
            isChecked={this.props.isCGVAccepted}
            label="J'ai lu et accepte les CGV"
          />
        </div>
      </div>
    )
  }

  contentClose() {
    const { payementMethod } = this.props
    return (
      <div>
        Je souhaite regler mon abonnement par
        {payementMethod === 1 && <span>prélèvement banquaire</span>}
        {payementMethod === 2 && <span>carte bancaire</span>}
      </div>
    )
  }

  render() {
    const {
      currentStep,
      changeStep,
      stepNumber,
      tokenIsLoading
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
        nextStep={this.handleSubscribe}
        isLoadingNextStep={tokenIsLoading}
        textButtonNextStep="Payer"
        handleAnimationEnding={this.handleAnimationEnding}
      />
    )
  }
}

PaymentStep.propTypes = {
  stepNumber: PropTypes.number,
  stepUrl: PropTypes.string,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  stripe: PropTypes.object,
  dispatchSetTokenStripe: PropTypes.func,
  dispatchSetTokenStripeLoaded: PropTypes.func,
  dispatchSetTokenError: PropTypes.func,
  dispatchSetPayementMethod: PropTypes.func,
  dispatchConfirmCheckout: PropTypes.func,
  dispatchConfirmCGV: PropTypes.func,
  payementMethod: PropTypes.number,
  tokenIsLoading: PropTypes.bool,
  tokenIsError: PropTypes.bool,
  tokenCardError: PropTypes.object,
  isCGVAccepted: PropTypes.bool,
  tokenMessageError: PropTypes.string,
  checkoutMessageError: PropTypes.string,
  offer: PropTypes.object,
  slimpayIframe: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  payementMethod: makeSelectPayementMethod(),
  tokenIsLoading: makeSelectTokenIsLoading(),
  tokenMessageError: makeSelectTokenMessageError(),
  checkoutMessageError: makeSelectCheckoutMessageError(),
  tokenIsError: makeSelectTokenIsSetError(),
  tokenCardError: makeSelectTokenCardError(),
  offer: makeSelectOffer(),
  slimpayIframe: makeSelectIframeContent(),
  isCGVAccepted: makeSelectIsCGVChecked(),
  checkoutIsLoading: makeSelectIsCheckoutLoading()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetPayementMethod: method => dispatch(setPayementMethod(method)),
    dispatchSetTokenStripe: () => dispatch(setTokenStripe()),
    dispatchSetTokenStripeLoaded: token =>
      dispatch(setTokenStripeLoaded(token)),
    dispatchSetTokenError: error => dispatch(setTokenStripeError(error)),
    dispatchConfirmCheckout: () => dispatch(postCheckout()),
    dispatchConfirmCGV: () => dispatch(setCgvConfirm())
  }
}

export default injectStripe(
  connect(mapStateToProps, mapDispatchToProps)(PaymentStep)
)
