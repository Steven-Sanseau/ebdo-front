import React from 'react'
import PropTypes from 'prop-types'
import emailRegex from 'email-regex'
import idx from 'idx'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import {
  makeSelectClient,
  makeSelectClientEmail
} from 'containers/Checkout/selectors'
import { setClientEmail, postClient } from 'containers/Checkout/actions'

import FormEmail from 'components/FormEmail'
import ToggleStep from 'components/ToggleStep/Loadable'

class EmailStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isValidated: null,
      errorEmail: false,
      errorMessage: ''
    }

    this.handleNextStep = this.handleNextStep.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNextStep() {
    if (this.state.isValidated) {
      this.props.nextStep()
    }
  }

  handleEmail(event) {
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

  handleSubmit(event) {
    event.preventDefault()
    this.validateEmail()

    if (this.validateEmail()) {
      this.props.dispatchPostClient()
    }

    if (!this.state.errorEmail) {
      // this.props.nextStep()
    }
  }

  contentOpen() {
    const { errorEmail, errorMessage } = this.state
    const { email } = this.props

    return (
      <div>
        <FormEmail
          handleEmail={this.handleEmail}
          errorEmail={errorEmail}
          errorMessage={errorMessage}
          handleSubmitEmail={this.handleSubmit}
          email={email}
        />
      </div>
    )
  }

  contentClose() {
    const { email } = this.props
    return <div>Mon Email est {email}</div>
  }

  render() {
    const { currentStep, changeStep, stepNumber, client } = this.props
    // console.log(client.loading)
    return (
      <ToggleStep
        title="Je renseigne mon Email"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
        isLoadingNextStep={client.loading}
      />
    )
  }
}

EmailStep.propTypes = {
  client: PropTypes.object,
  email: PropTypes.string,
  changeStep: PropTypes.func,
  currentStep: PropTypes.number,
  // dispatch: PropTypes.func.isRequired,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number,
  dispatchChangeEmail: PropTypes.func,
  dispatchPostClient: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  client: makeSelectClient(),
  email: makeSelectClientEmail()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchChangeEmail: email => dispatch(setClientEmail(email)),
    dispatchPostClient: () => dispatch(postClient())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(EmailStep)
