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
import { setClientEmail, postClient, useClientExist } from 'actions/client'

import FormEmail from 'components/FormEmail'
import ToggleStep from 'components/ToggleStep/Loadable'

class EmailStep extends React.Component {
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
        <FormEmail
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
    const { email } = this.props
    return <div>Mon Email est {email}</div>
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
        title="Je renseigne mon Email"
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
  email: makeSelectClientEmail()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchChangeEmail: email => dispatch(setClientEmail(email)),
    dispatchPostClient: () => dispatch(postClient()),
    dispatchUseClientExist: () => dispatch(useClientExist())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(EmailStep)
