import React from 'react'
import PropTypes from 'prop-types'

import InputWrapper from './InputWrapper'

class InputCheckbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }
  }

  componentDidMount() {
    this.state.checked = this.props.checked
  }

  render() {
    return (
      <InputWrapper>
        <input type="checkbox" checked={this.state.checked} />
        <Input
          error={this.props.error || false}
          id={this.props.id || ''}
          name={this.props.name || ''}
          onChange={this.props.onChange || null}
          placeholder={this.props.placeholder || ''}
          ref={this.props.reference || null}
          type="text"
          value={this.props.value || ''}
        />
      </InputWrapper>
    )
  }
}

InputCheckbox.propTypes = {
  checked: PropTypes.bool
}

export default InputCheckbox
