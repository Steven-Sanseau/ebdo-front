import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import {
  makeSelectLogin,
  makeSelectWaitingForCode,
  makeIsLoadingLogin
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
    this.setState({ isAnim: true })
    this.props.loginEmailCode(this.props.email, this.state.code, true)
    // TODO Handle wrong code
  }

  handleCode = event => {
    this.setState({ code: event.target.value })
  }

  contentOpen() {
    return (
      <div>
        <p>Veuillez rentrer le code reçu par email pour valider la connexion</p>
        <InputText
          name="code"
          type="number"
          value={this.state.code}
          onChange={this.handleCode}
          placeholder="557590"
          label="Code reçu par email"
        />
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
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectClientEmail()
})

const mapDispatchToProps = { loginEmailCode }

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(EmailConfirmStep)
