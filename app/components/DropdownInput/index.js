import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown'
import { Row, Col } from 'react-flexbox-grid'

import DropdownWrapper from './DropdownWrapper'
import Label from './Label'

import './Dropdown.css'

class DropdownInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: this.props.value }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(value) {
    this.setState({ value })
    this.props.handleChange(value)
  }

  render() {
    const { placeholder, options, label } = this.props
    const { value } = this.state
    return (
      <DropdownWrapper>
        {label && (
          <Row>
            <Col xs={12}>
              <Label>{label}</Label>
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={12}>
            <div className="dropdown-wrapper-input">
              <Dropdown
                className="dropdown-input"
                options={options}
                value={value}
                onChange={this.handleSelect}
                placeholder={placeholder}
              />
            </div>
          </Col>
        </Row>
      </DropdownWrapper>
    )
  }
}

DropdownInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.object,
  handleChange: PropTypes.func
}

export default DropdownInput
