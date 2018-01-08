import React from 'react'
import PropTypes from 'prop-types'

// import styled from 'styled-components';
import IconCheckbox from './IconCheckbox'
import TextCheckbox from './TextCheckbox'
import DisplayFlex from './DisplayFlex'
import Button from './Button'
import ErrorMessage from './ErrorMessage'

function Checkbox(props) {
  const { isChecked, text, onCheck, errorMessage, error } = props
  return (
    <div>
      <Button color={error ? '--tomato' : '--space-grey'} onClick={onCheck}>
        {isChecked && (
          <DisplayFlex>
            <IconCheckbox checked>✓</IconCheckbox>
            <TextCheckbox checked>{text}</TextCheckbox>
          </DisplayFlex>
        )}
        {!isChecked && (
          <DisplayFlex>
            <IconCheckbox color={error ? '--tomato' : '--black'} />
            <TextCheckbox color={error ? '--tomato' : '--black'}>
              {text}
            </TextCheckbox>
          </DisplayFlex>
        )}
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Button>
    </div>
  )
}

Checkbox.propTypes = {
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  errorMessage: PropTypes.string,
  error: PropTypes.bool,
  onCheck: PropTypes.func
}

export default Checkbox
