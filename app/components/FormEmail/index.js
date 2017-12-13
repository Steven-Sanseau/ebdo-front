import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import InputText from 'components/InputText'

function FormEmail(props) {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <form onSubmit={props.handleSubmitEmail}>
            <Row>
              <Col xs={12} lg={6}>
                <InputText
                  errorMessage={props.errorMessage}
                  error={props.errorEmail}
                  label="Email"
                  name="email"
                  value={props.email}
                  onChange={props.handleEmail}
                  placeholder="monemail@gmail.com"
                />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  )
}

FormEmail.propTypes = {
  email: PropTypes.string,
  errorEmail: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleEmail: PropTypes.func,
  handleSubmitEmail: PropTypes.func
}

export default FormEmail
