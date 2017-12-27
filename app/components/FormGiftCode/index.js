import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import InputText from 'components/InputText'

function FormGiftCode(props) {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <form onSubmit={props.handleSubmitCode}>
            <Row>
              <Col xs={12} lg={6}>
                <InputText
                  errorMessage={props.errorMessage}
                  error={props.errorCode}
                  label="Email"
                  name="email"
                  value={props.code}
                  onChange={props.handleCode}
                  placeholder="A32OW8"
                />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  )
}

FormGiftCode.propTypes = {
  code: PropTypes.string,
  errorCode: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleCode: PropTypes.func,
  handleSubmitCode: PropTypes.func
}

export default FormGiftCode
