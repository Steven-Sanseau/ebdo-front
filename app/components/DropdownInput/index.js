import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown'

import DropdownWrapper from './DropdownWrapper'

import './Dropdown.css'

class DropdownInput extends React.Component {
  constructor(props) {
    super(props)

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(val) {
    console.log(val)
  }

  render() {
    const options = ['Vendredi 12/11', 'Vendredi 19/11', 'Vendredi 25/11']
    const { placeholder } = this.props

    return (
      <DropdownWrapper>
        <Dropdown
          className="dropdown-input"
          options={options}
          onChange={this.handleSelect}
          placeholder={placeholder}
        />
      </DropdownWrapper>
    )
  }
}

DropdownInput.propTypes = {
  placeholder: PropTypes.string
}

export default DropdownInput
