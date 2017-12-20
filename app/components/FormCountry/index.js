import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import DropdownInput from 'components/DropdownInput'

function FormCountry(props) {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <form onSubmit={props.handleSubmitCountry}>
            <Row>
              <Col xs={12} lg={6}>
                <DropdownInput
                  name="country"
                  label="Mon pays de livraison"
                  value={props.country}
                  options={props.countryList}
                  handleChange={props.handleCountry}
                  placeholder="France"
                />
              </Col>
            </Row>
          </form>
        </Col>
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
