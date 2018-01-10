import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import Label from './Label'
import Input from './Input'
import InputWrapper from './InputWrapper'
import Required from './Required'
import ErrorMessage from './ErrorMessage'

class InputText extends React.Component {
  render() {
    return (
      <InputWrapper>
        <Label error={this.props.error || false} color={this.props.color}>
          <Row>
            <Col xs={12}>
              {this.props.label}
              {this.props.isRequired && <Required>*</Required>}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Input
                error={this.props.error || false}
                id={this.props.id || null}
                name={this.props.name || ''}
                onChange={this.props.onChange || null}
                placeholder={this.props.placeholder || ''}
                ref={this.props.reference || null}
                type={this.props.type || 'text'}
                value={this.props.value || ''}
                disabled={this.props.disabled || false}
              />
            </Col>
          </Row>
          {this.props.error && (
            <Row>
              <Col xs={12}>
                {this.props.errorMessage && (
                  <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
                )}
              </Col>
            </Row>
          )}
          {this.props.showMessage && (
            <Row>
              <Col xs={12}>
                {this.props.message && (
                  <ErrorMessage>{this.props.message}</ErrorMessage>
                )}
              </Col>
            </Row>
          )}
        </Label>
      </InputWrapper>
    )
  }
}

InputText.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  showMessage: PropTypes.bool,
  message: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  reference: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool
}

export default InputText
