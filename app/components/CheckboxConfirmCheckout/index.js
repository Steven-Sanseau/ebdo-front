import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import DropdownInput from 'components/DropdownInput'

function FormCountry(props) {
  return (
    <div>
      <Row>
        <Col xs={12} />
      </Row>
    </div>
  )
}

FormCountry.propTypes = {
  country: PropTypes.object,
  countryList: PropTypes.array,
  handleCountry: PropTypes.func,
  handleSubmitCountry: PropTypes.func
}

export default FormCountry
