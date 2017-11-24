import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from 'react-stripe-elements'
import Label from 'components/InputText/Label'
import Required from 'components/InputText/Required'

import './stripe.css'

export default class StripeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <Label>
          <Row>
            <Col xs={12}>
              Numéro de carte<Required>*</Required>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardNumberElement className="card-number input-stripe" />
            </Col>
          </Row>
        </Label>
        <Label>
          <Row>
            <Col xs={12}>
              Date d'expiration<Required>*</Required>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardExpiryElement className="card-expire input-stripe" />
            </Col>
          </Row>
        </Label>
        <Label>
          <Row>
            <Col xs={12}>
              CVC<Required>*</Required>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardCVCElement className="card-cvc input-stripe" />
            </Col>
          </Row>
        </Label>
      </div>
    )
  }
}

StripeForm.propTypes = {}
