import React from 'react'
import PropTypes from 'prop-types'
import emailRegex from 'email-regex'

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
        errorMessage: 'Veuillez entrer une ADDRESSe email valide'
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
        this.props.dispatchLoginEmail(this.props.email)
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
        <FormEmail
          handleEmail={this.handleEmail}
          errorEmail={errorEmail}
          errorMessage={errorMessage}
          handleSubmitEmail={this.handleSubmit}
          email={email}
        />
        {!this.state.isAnim &&
          clientExist && (
            <div>
              <BoldText>
                Votre adresse est déjà enregistrée chez nous. Vous allez devoir
                vous connecter.
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
      login
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
        updateStepHide={!!login.token}
        handleAnimationEnding={this.handleAnimationEnding}
      />
    )
  }
}

EmailStep.propTypes = {
  clientIsLoading: PropTypes.bool,
  email: PropTypes.string,
  changeStep: PropTypes.func,
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number,
  dispatchChangeEmail: PropTypes.func,
  dispatchPostClient: PropTypes.func,
  dispatchUseClientExist: PropTypes.func,
  clientExist: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  clientIsLoading: makeSelectClientIsLoading(),
  clientExist: makeSelectClientExist(),
  isLoggedIn: makeIsLoggedIn(),
  email: makeSelectClientEmail(),
  login: makeSelectLogin()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchChangeEmail: email => dispatch(setClientEmail(email)),
    dispatchPostClient: () => dispatch(postClient()),
    dispatchUseClientExist: () => dispatch(useClientExist()),
    dispatchLoginEmail: email => dispatch(loginEmail(email))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(EmailStep)
