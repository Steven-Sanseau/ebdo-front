import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import {
  makeSelectLogin,
  makeSelectWaitingForCode,
  makeIsLoadingLogin,
  makeIsLoggedIn
} from 'selectors/login'
import { makeSelectClientEmail } from 'selectors/client'
import { loginEmailCode } from 'actions/login'
import InputText from 'components/InputText'
import ToggleStep from 'components/ToggleStep/Loadable'

const InputCode = styled(InputText)`
  input {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
class EmailConfirmStep extends React.Component {
  state = {
    code: '',
    isAnim: false
  }

  handleAnimationEnding = () => {
    this.setState({ isAnim: false })
  }

  handleNextStep = event => {
    event.preventDefault()

    this.setState({ isAnim: true })

    this.props.dispatchloginEmailCode(
      this.props.email,
      this.state.code,
      !this.props.isOffer
    )
    // TODO Handle wrong code
  }

  handleCode = event => {
    this.setState({ code: event.target.value })
  }

  handleSubmit = event => {
    this.handleNextStep(event)
  }

  contentOpen() {
    return (
      <div>
        <p>Veuillez rentrer le code reçu par email pour valider la connexion</p>
        <form onSubmit={this.handleSubmit}>
          <InputCode
            name="code"
            type="number"
            value={this.state.code}
            onChange={this.handleCode}
            placeholder="5575"
            label="Code reçu par email"
          />
        </form>
      </div>
    )
  }

  contentClose() {
    return <div>Email validé</div>
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
        title="Je confirme mon adresse email"
        stepNumber={stepNumber}
        iconName="mail"
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
        textButtonNextStep="Valider le code"
        isLoadingNextStep={checkoutIsLoading}
        updateStepHide
        handleAnimationEnding={this.handleAnimationEnding}
      />
    )
  }
}

EmailConfirmStep.propTypes = {
  changeStep: PropTypes.func,
  stepUrl: PropTypes.string,
  dispatchloginEmailCode: PropTypes.func,
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number,
  isLoggedIn: PropTypes.bool,
  isOffer: PropTypes.bool
}

EmailConfirmStep.defaultProps = {
  isOffer: false
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectClientEmail()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchloginEmailCode: (email, code, isCheckout) =>
      dispatch(loginEmailCode(email, code, isCheckout, null))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(EmailConfirmStep)
