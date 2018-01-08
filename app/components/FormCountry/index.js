import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import DropdownInput from 'components/DropdownInput'

const DropdownWrapperCountry = styled(DropdownInput)`
  width: 200px;
`
function FormCountry(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmitCountry}>
        <DropdownWrapperCountry
          name="country"
          value={props.country}
          options={props.countryList}
          handleChange={props.handleCountry}
          placeholder="France"
        />
      </form>
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
