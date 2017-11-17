import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components';

class FormulaStep extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return <div />
  }
}

FormulaStep.propTypes = {
  stepNumber: PropTypes.number,
  isOpen: PropTypes.bool,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}

export default FormulaStep
