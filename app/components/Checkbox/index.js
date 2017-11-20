import React from 'react'
import PropTypes from 'prop-types'

// import styled from 'styled-components';
import IconCheckbox from './IconCheckbox'
import TextCheckbox from './TextCheckbox'
import DisplayFlex from './DisplayFlex'
import Button from './Button'

function Checkbox(props) {
  const { isChecked, text, onCheck } = props
  return (
    <div>
      <Button onClick={onCheck}>
        {isChecked && (
          <DisplayFlex>
            <IconCheckbox checked>✓</IconCheckbox>
            <TextCheckbox checked>{text}</TextCheckbox>
          </DisplayFlex>
        )}
        {!isChecked && (
          <DisplayFlex>
            <IconCheckbox />
            <TextCheckbox>{text}</TextCheckbox>
          </DisplayFlex>
        )}
      </Button>
    </div>
  )
}

Checkbox.propTypes = {
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  onCheck: PropTypes.func
}

export default Checkbox
