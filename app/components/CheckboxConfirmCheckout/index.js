import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import Checkbox from 'components/Checkbox'

function FormConfirm(props) {
  return (
    <div>
      <Row>
        <Checkbox
          text="J'ai lu et accepté les CGV"
          onCheck={props.handleConfirmCGV}
          isChecked={props.isChecked}
        />
      </Row>
    </div>
  )
}

FormConfirm.propTypes = {
  handleConfirmCGV: PropTypes.func,
  isChecked: PropTypes.bool
}

export default FormConfirm
