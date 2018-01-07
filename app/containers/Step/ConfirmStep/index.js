import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { postCheckout, setCgvConfirm } from 'actions/checkout'
import {
  makeSelectCheckout,
  makeSelectIsCGVChecked,
  makeSelectIsCheckoutLoading
} from 'selectors/checkout'

import { makeIsErrorLogin } from 'selectors/login'

import CheckboxConfirmCheckout from 'components/CheckboxConfirmCheckout'
import ToggleStep from 'components/ToggleStep/Loadable'

class ConfirmStep extends React.Component {
  state = {
    errMessage: ''
  }

  handleCheckboxCGV = event => {
    this.props.dispatchConfirmCGV()
  }

  handleNextStep = () => {
    if (this.props.isCGVAccepted) {
      this.props.dispatchConfirmCheckout()
    } else {
      this.setState({ errMessage: 'Vous devez acceptez les CGV' })
    }
  }

  contentOpen() {
    const { errMessage } = this.state
    return (
      <div>
        Vérifiez attentivement vos informations avant de confirmer.
        <CheckboxConfirmCheckout
          handleConfirmCGV={this.handleCheckboxCGV}
          isChecked={this.props.isCGVAccepted}
          label="J'ai lu et accepte les CGV"
        />
        {errMessage}
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
      checkoutIsLoading,
      isErrorLogin
    } = this.props

    return (
      <div>
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
          isError={isErrorLogin}
        />
      </div>
    )
  }
}

ConfirmStep.propTypes = {
  checkoutIsLoading: PropTypes.bool,
  checkout: PropTypes.object,
  changeStep: PropTypes.func,
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number,
  dispatchConfirmCheckout: PropTypes.func,
  dispatchConfirmCGV: PropTypes.func,
  isCGVAccepted: PropTypes.bool,
  isErrorLogin: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout(),
  isCGVAccepted: makeSelectIsCGVChecked(),
  checkoutIsLoading: makeSelectIsCheckoutLoading(),
  isErrorLogin: makeIsErrorLogin()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchConfirmCheckout: () => dispatch(postCheckout()),
    dispatchConfirmCGV: () => dispatch(setCgvConfirm())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(ConfirmStep)
