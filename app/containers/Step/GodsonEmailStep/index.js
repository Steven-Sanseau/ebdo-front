import React from 'react'
import PropTypes from 'prop-types'
import emailRegex from 'email-regex'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import {
  makeSelectGodsonIsLoading,
  makeSelectGodsonEmail,
  makeSelectGodsonExist
} from 'selectors/godson'

import { setGodsonEmail, postGodson, useGodsonExist } from 'actions/godson'
import { nextStep } from 'actions/step'

import FormEmail from 'components/FormEmail'
import ToggleStep from 'components/ToggleStep/Loadable'
import BoldText from 'components/LayoutStep/BoldText'

class GodsonEmailStep extends React.Component {
  state = {
    isAnim: false,
    errorEmail: false,
    errorMessage: ''
  }

  handleAnimationEnding = () => {
    this.setState({ isAnim: false })
  }

  handleNextStep = event => {
    this.setState({ isAnim: true })
    this.handleSubmit(event)
  }

  handleEmail = event => {
    const email = event.target.value

    this.resetEmail()
    this.props.dispatchChangeEmail(email)
  }

  resetEmail = () => {
    this.setState({ errorEmail: false, errorMessage: '' })
  }

  validateEmail = () => {
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
        errorMessage: "Veuillez remplir l'adresse email du parrainé"
      })
      return false
    }
    return true
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.validateEmail()) {
      if (this.props.clientExist) {
        this.props.dispatchUseGodsonExist()
      } else {
        this.props.dispatchPostGodson()
      }
    }
  }

  contentOpen() {
    const { errorEmail, errorMessage } = this.state
    const { email } = this.props

    return (
      <div>
        <FormEmail
          handleEmail={this.handleEmail}
          errorEmail={!this.state.isAnim ? errorEmail : false}
          errorMessage={errorMessage}
          handleSubmitEmail={this.handleSubmit}
          email={email}
        />
      </div>
    )
  }

  contentClose() {
    const { email } = this.props
    return (
      <span>
        Toutes les informations concernant le parrainé seront <br /> envoyées
        à <BoldText>{email}</BoldText>
      </span>
    )
  }

  render() {
    const {
      currentStep,
      changeStep,
      stepNumber,
      clientIsLoading,
      clientExist
    } = this.props

    return (
      <ToggleStep
        title="Je renseigne l'email du parrainé"
        iconName="mail"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
        isLoadingNextStep={clientIsLoading}
        textButtonNextStep={clientExist ? 'Je continue !' : null}
        colorButtonNextStep={clientExist ? '--squash' : '--booger'}
        handleAnimationEnding={this.handleAnimationEnding}
      />
    )
  }
}

GodsonEmailStep.propTypes = {
  clientIsLoading: PropTypes.bool,
  email: PropTypes.string,
  stepUrl: PropTypes.string,
  changeStep: PropTypes.func,
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number,
  dispatchChangeEmail: PropTypes.func,
  dispatchPostGodson: PropTypes.func,
  dispatchUseGodsonExist: PropTypes.func,
  dispatchNextStep: PropTypes.func,
  clientExist: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  clientIsLoading: makeSelectGodsonIsLoading(),
  clientExist: makeSelectGodsonExist(),
  email: makeSelectGodsonEmail()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchChangeEmail: email => dispatch(setGodsonEmail(email)),
    dispatchPostGodson: () => dispatch(postGodson()),
    dispatchUseGodsonExist: () => dispatch(useGodsonExist()),
    dispatchNextStep: () => dispatch(nextStep())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(GodsonEmailStep)
