import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import ToggleStep from '../ToggleStep/Loadable'

class FormulaStep extends React.Component {
  constructor(props) {
    super(props)
  }

  contentOpen() {
    return <div>Coucou</div>
  }

  contentClose() {
    return <div>Je m'abonne sans engagement pour un montant de </div>
  }

  render() {
    const { isOpen, nextStep, changeStep, stepNumber } = this.props

    return (
      <div>
        <ToggleStep
          title="Je choisis ma formule"
          stepNumber={stepNumber}
          contentClose={this.contentClose()}
          contentOpen={this.contentOpen()}
          isOpen={isOpen}
          changeStep={changeStep}
          nextStep={nextStep}
        />
      </div>
    )
  }
}

FormulaStep.propTypes = {
  stepNumber: PropTypes.number,
  isOpen: PropTypes.bool,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}

export default FormulaStep
