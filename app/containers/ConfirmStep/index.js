import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { confirmCheckout } from 'actions/checkout'
import { makeSelectCheckout } from 'selectors/checkout'

import CheckboxConfirmCheckout from 'components/CheckboxConfirmCheckout'
import ToggleStep from 'components/ToggleStep/Loadable'

class ConfirmStep extends React.Component {
  constructor(props) {
    super(props)

    this.handleNextStep = this.handleNextStep.bind(this)
  }

  handleNextStep() {
    this.handleSubmit()
  }

  contentOpen() {
    return (
      <div>
        Vérifiez attentivement vos informations avant de confirmer.
        <CheckboxConfirmCheckout label="J'ai lu et accepte les CGV" />
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
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
        isLoadingNextStep={checkoutIsLoading}
      />
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
  dispatchConfirmCheckout: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchConfirmCheckout: () => dispatch(confirmCheckout())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(ConfirmStep)
