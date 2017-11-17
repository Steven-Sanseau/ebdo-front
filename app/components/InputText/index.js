import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import Label from './Label'
import Input from './Input'
import InputWrapper from './InputWrapper'
import Required from './Required'

class InputText extends React.Component {
  render() {
    return (
      <InputWrapper>
        <Label>
          <Row>
            <Col xs={12}>
              {this.props.label}
              {this.props.isRequired && <Required>*</Required>}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Input
                type="text"
                id={this.props.id || ''}
                name={this.props.name || ''}
                value={this.props.value || ''}
                onChange={this.props.onChange || null}
                placeholder={this.props.placeholder || ''}
              />
            </Col>
          </Row>
        </Label>
      </InputWrapper>
    )
  }
}

InputText.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default InputText
