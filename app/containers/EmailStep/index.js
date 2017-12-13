import React from 'react'
import PropTypes from 'prop-types'
import emailRegex from 'email-regex'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import {
  makeSelectCheckout,
  makeSelectClient
} from 'containers/Checkout/selectors'
import { setClientEmail, postClient } from 'containers/checkout/actions'
import { POST_CLIENT } from 'containers/checkout/constants'
import reducer from 'containers/Checkout/reducer'
import saga from 'containers/Checkout/saga'

import FormEmail from 'components/FormEmail'
import ToggleStep from 'components/ToggleStep/Loadable'

class EmailStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
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
      this.props.nextStep({ email: this.state.email })
    }
  }

  handleEmail(event) {
    const email = event.target.value

    this.resetEmail()
    this.setState({ email })
    this.props.onChangeEmail(this.state.email)
  }

  resetEmail() {
    this.setState({ errorEmail: false, errorMessage: '' })
  }

  validateEmail() {
    const { email } = this.state

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
      console.log('postClient')
      this.props.postClient(this.state.email)
    }

    if (!this.state.errorEmail) {
      // this.props.nextStep()
    }
  }

  contentOpen() {
    const { email, isValidated, errorEmail, errorMessage } = this.state
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
    const { email } = this.state
    return <div>Mon Email est {email}</div>
  }

  render() {
    const { currentStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je renseigne mon Email"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
      />
    )
  }
}

EmailStep.propTypes = {
  changeStep: PropTypes.func,
  currentStep: PropTypes.number,
  // dispatch: PropTypes.func.isRequired,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number,
  onChangeEmail: PropTypes.func,
  postClient: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  // checkout: ,
  client: makeSelectClient()
})

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: email => dispatch(setClientEmail(email)),
    postClient: e => dispatch(postClient())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({ key: 'checkout', reducer })
const withSaga = injectSaga({ key: 'checkout', saga })

export default compose(withReducer, withSaga, withConnect)(EmailStep)
