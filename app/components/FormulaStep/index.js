import React from 'react'
import PropTypes from 'prop-types'

import ToggleStep from '../ToggleStep/Loadable'
import FormulaText from './FormulaText'
import InputCheckbox from '../InputCheckbox'

class FormulaStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formula: true
    }
  }

  contentOpen() {
    const { formula } = this.state
    return (
      <div>
        <FormulaText>
          Nous vous proposons deux formules. L’une vous permet de vous abonner
          pour une durée fixe, en réglant la totalité de votre abonnement dès
          maintenant. La seconde est sans engagement de durée et vous propose de
          choisir le montant de votre prélèvement mensuel.
          <br />
          <br />Je souhaite m’abonner:
        </FormulaText>
      </div>
    )
  }

  contentClose() {
    return <div>Je mabonne sans engagement pour un montant de </div>
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je choisis ma formule"
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

FormulaStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}

export default FormulaStep
