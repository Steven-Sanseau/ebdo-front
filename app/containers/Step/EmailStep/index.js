import React from 'react'
import PropTypes from 'prop-types'
import emailRegex from 'email-regex'
import { push } from 'react-router-redux'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import {
  makeSelectClientIsLoading,
  makeSelectClientEmail,
  makeSelectClientExist
} from 'selectors/client'

import { makeSelectLogin, makeIsLoggedIn } from 'selectors/login'
import { setClientEmail, postClient, useClientExist } from 'actions/client'
import { loginEmail } from 'actions/login'
import { nextStep } from 'actions/step'

import FormEmail from 'components/FormEmail'
import ToggleStep from 'components/ToggleStep/Loadable'
import BoldText from 'components/LayoutStep/BoldText'

class EmailStep extends React.Component {
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
        errorMessage: 'Veuillez remplir votre adresse email'
      })
      return false
    }
    return true
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.dispatchStopSubscriptionPage()

    // if (this.validateEmail()) {
    //   if (this.props.clientExist) {
    //     this.props.dispatchLoginEmail(this.props.email, false)
    //     this.props.dispatchUseClientExist(!this.props.isOfferStep)
    //   } else {
    //     this.props.dispatchPostClient(this.props.isFreeNumberStep)
    //   }
    // }
  }

  contentOpen() {
    const { errorEmail, errorMessage } = this.state
    const { email, clientExist } = this.props

    return (
      <div>
        <FormEmail
          handleEmail={this.handleEmail}
          errorEmail={!this.state.isAnim ? errorEmail : false}
          errorMessage={errorMessage}
          handleSubmitEmail={this.handleSubmit}
          email={email}
        />
        {!this.state.isAnim &&
          clientExist && (
            <div>
              <BoldText>
                Votre adresse est déjà enregistrée. Vous allez devoir vous
                connecter.
              </BoldText>
            </div>
          )}
      </div>
    )
  }

  contentClose() {
    const { email } = this.props
    return (
      <span>
        Toutes les informations concernant mon abonnement seront <br /> envoyées
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
      clientExist,
      isLoggedIn
    } = this.props

    return (
      <ToggleStep
        title="Je renseigne mon email"
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
        updateStepHide={isLoggedIn}
        handleAnimationEnding={this.handleAnimationEnding}
      />
    )
  }
}

EmailStep.propTypes = {
  clientIsLoading: PropTypes.bool,
  email: PropTypes.string,
  stepUrl: PropTypes.string,
  changeStep: PropTypes.func,
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number,
  dispatchChangeEmail: PropTypes.func,
  dispatchStopSubscriptionPage: PropTypes.func,
  dispatchPostClient: PropTypes.func,
  dispatchUseClientExist: PropTypes.func,
  dispatchNextStep: PropTypes.func,
  clientExist: PropTypes.bool,
  isFreeNumberStep: PropTypes.bool
}

EmailStep.defaultProps = {
  isFreeNumberStep: false
}

const mapStateToProps = createStructuredSelector({
  clientIsLoading: makeSelectClientIsLoading(),
  clientExist: makeSelectClientExist(),
  isLoggedIn: makeIsLoggedIn(),
  email: makeSelectClientEmail()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchChangeEmail: email => dispatch(setClientEmail(email)),
    dispatchPostClient: checkEmail => dispatch(postClient(checkEmail)),
    dispatchUseClientExist: () => dispatch(useClientExist()),
    dispatchStopSubscriptionPage: () => dispatch(push('/abo/error')),
    dispatchLoginEmail: (email, redirect) =>
      dispatch(loginEmail(email, redirect)),
    dispatchNextStep: () => dispatch(nextStep())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(EmailStep)
