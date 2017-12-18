import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
  // CardElement
} from 'react-stripe-elements'
import Label from 'components/InputText/Label'
import Required from 'components/InputText/Required'

import './stripe.css'

export default class StripeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log(event)
  }

  handleSubmit(event) {
    this.props.submitPayement(event)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col lg={6} xs={12}>
              {/* <CardElement className="card-number input-stripe" /> */}
              <Label>
                <Row>
                  <Col xs={12}>
                    Numéro de carte<Required>*</Required>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <CardNumberElement
                      onChange={event => this.handleChange(event)}
                      className="card-number input-stripe"
                    />
                  </Col>
                </Row>
              </Label>
            </Col>
            <Col lg={3} xs={12}>
              <Label>
                <Row>
                  <Col xs={12}>
                    Date d{"'"}expiration<Required>*</Required>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <CardExpiryElement className="card-expire input-stripe" />
                  </Col>
                </Row>
              </Label>
            </Col>
            <Col lg={3} xs={12}>
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
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

StripeForm.propTypes = {
  submitPayement: PropTypes.func
}
