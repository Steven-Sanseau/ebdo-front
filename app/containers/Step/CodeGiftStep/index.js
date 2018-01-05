import React from 'react'
import PropTypes from 'prop-types'
import emailRegex from 'email-regex'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { postCheckout, setCgvConfirm } from 'actions/checkout'
import {
  makeSelectCheckout,
  makeSelectIsCGVChecked,
  makeSelectIsCheckoutLoading
} from 'selectors/checkout'

import ToggleStep from 'components/ToggleStep/Loadable'
import FormGiftCode from 'components/FormGiftCode'

class CodeGiftStep extends React.Component {
  state = {
    errorEmail: false,
    errorMessage: ''
  }

  handleNextStep = event => {
    this.handleSubmit(event)
  }

  handleEmail = event => {
    const email = event.target.value

    this.resetEmail()
    this.props.dispatchChangeEmail(email)
  }

  resetEmail() {
    this.setState({ errorEmail: false, errorMessage: '' })
  }

  validateEmail() {
    const { email } = this.props

    if (!emailRegex({ exact: true }).test(email)) {
      this.setState({
        errorEmail: true,
        errorMessage: 'Veuillez entrer une adresse email valide'
      })
      return false
    }

    if (email === '') {
      this.setState({
        errorEmail: true,
        errorMessage: 'Veuillez remplir votre email'
      })
      return false
    }
    return true
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.validateEmail()) {
      if (this.props.clientExist) {
        this.props.dispatchUseClientExist()
      } else {
        this.props.dispatchPostClient()
      }
    }
  }
  contentOpen() {
    const { errorEmail, errorMessage } = this.state
    const { email, clientExist } = this.props

    return (
      <div>
        <FormGiftCode
          handleEmail={this.handleEmail}
          errorEmail={errorEmail}
          errorMessage={errorMessage}
          handleSubmitEmail={this.handleSubmit}
          email={email}
        />
        {clientExist && (
          <div>
            Votre adresse est déjà enregistrée chez nous. Etes vous sûr de
            vouloir passer une nouvelle commande ?
          </div>
        )}
      </div>
    )
  }

  contentClose() {
    return <div>Vous avez validé votre commande</div>
  }

  render() {
    const {
      currentStep,
      changeStep,
      stepNumber,
      checkoutIsLoading
    } = this.props

    return (
      <ToggleStep
        title="Je confirme mon abonnement"
        stepNumber={stepNumber}
        iconName="check"
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
        textButtonNextStep=">> Je m'abonne !"
        isLoadingNextStep={checkoutIsLoading}
      />
    )
  }
}

CodeGiftStep.propTypes = {
  checkoutIsLoading: PropTypes.bool,
  checkout: PropTypes.object,
  changeStep: PropTypes.func,
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number,
  dispatchConfirmCheckout: PropTypes.func,
  dispatchConfirmCGV: PropTypes.func,
  isCGVAccepted: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout(),
  isCGVAccepted: makeSelectIsCGVChecked(),
  checkoutIsLoading: makeSelectIsCheckoutLoading()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchConfirmCheckout: () => dispatch(postCheckout()),
    dispatchConfirmCGV: () => dispatch(setCgvConfirm())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(CodeGiftStep)
