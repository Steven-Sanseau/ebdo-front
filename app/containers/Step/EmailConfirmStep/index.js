import React from 'react'
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
    this.props.dispatchloginEmailCode(this.props.email, this.state.code, true)
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
          <InputText
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
        updateStepHide={true}
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
  isLoggedIn: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectClientEmail()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchNextStep: () => dispatch(nextStep()),
    dispatchChangeEmail: email => dispatch(setClientEmail(email)),
    dispatchloginEmailCode: (email, code, isCheckout) =>
      dispatch(loginEmailCode(email, code, isCheckout))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(EmailConfirmStep)
