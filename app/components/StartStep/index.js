import React from 'react'
import PropTypes from 'prop-types'

import ToggleStep from '../ToggleStep/Loadable'

class StartStep extends React.Component {
  contentOpen() {
    return <div>Code promo</div>
  }

  contentClose() {
    return (
      <div>
        Mon abonnement débutera avec la reception de mon premier numéro le
      </div>
    )
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je choisis la date de demarage de mon abonnement"
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

StartStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}
export default StartStep
