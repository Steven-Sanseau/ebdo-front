import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-flexbox-grid'

import Title from 'components/LayoutStep/Title'
import Checkbox from 'components/Checkbox'

export default class CheckboxShowInvoiceForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleCheckbox(event) {
    event.preventDefault()

    this.props.showInvoiceForm()
  }

  render() {
    const { isChecked } = this.props
    return (
      <Row>
        <Col lg={5} xs={11}>
          <Title>Adresse de facturation</Title>
          <Checkbox
            text="Utiliser la même adresse"
            onCheck={this.handleCheckbox}
            isChecked={isChecked}
          />
        </Col>
      </Row>
    )
  }
}

CheckboxShowInvoiceForm.propTypes = {
  showInvoiceForm: PropTypes.func,
  isChecked: PropTypes.bool
}
