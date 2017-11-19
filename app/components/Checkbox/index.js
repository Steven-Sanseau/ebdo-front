import React from 'react'
import PropTypes from 'prop-types'

// import styled from 'styled-components';
import IconCheckbox from './IconCheckbox'
import TextCheckbox from './TextCheckbox'

function Checkbox(props) {
  const { isChecked, text, onCheck } = props
  return (
    <div>
      <button onClick={onCheck}>
        {isChecked && (
          <div>
            <IconCheckbox checked>✓</IconCheckbox>
            <TextCheckbox checked>{text}</TextCheckbox>
          </div>
        )}
        {!isChecked && (
          <div>
            <IconCheckbox />
            <TextCheckbox>{text}</TextCheckbox>
          </div>
        )}
      </button>
    </div>
  )
}

Checkbox.propTypes = {
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  onCheck: PropTypes.func
}

export default Checkbox
