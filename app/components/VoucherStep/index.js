import React from 'react'
import PropTypes from 'prop-types'

import ToggleStep from '../ToggleStep/Loadable'
import FormVoucher from './FormVoucher'

class VoucherStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = { voucher: '' }
  }

  contentOpen() {
    const { voucher } = this.state
    return (
      <div>
        <FormVoucher voucher={voucher} />
      </div>
    )
  }

  contentClose() {
    return <div>Je nai pas de code promo</div>
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="J'active mon code promo"
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

VoucherStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}

export default VoucherStep
