import React from 'react'
import PropTypes from 'prop-types'

import ToggleStep from '../ToggleStep/Loadable'
import FormEmail from './FormEmail'

class EmailStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  contentOpen() {
    return (
      <div>
        <FormEmail email={this.state.email} />
      </div>
    )
  }

  contentClose() {
    const { email } = this.state
    return <div>Mon Email est {email}</div>
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je renseigne mon Email"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={nextStep}
      />
    )
  }
}

EmailStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}

export default EmailStep
