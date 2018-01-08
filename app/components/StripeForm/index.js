import React, { Component } from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from 'react-stripe-elements'

import Label from 'components/InputText/Label'
import Required from 'components/InputText/Required'
import IconWrapper from 'components/InputCheckbox/IconWrapper'
import SecureSvg from 'components/Icon/SecureSvg'

import './stripe.css'
const LabelCard = styled(Label)`
  margin-top: 15px;
`
export default class StripeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
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
              <LabelCard>
                <Row>
                  <Col xs={12}>
                    Numéro de carte<Required>*</Required>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <CardNumberElement
                      onChange={this.props.handleChange}
                      className="card-number input-stripe "
                    />
                  </Col>
                </Row>
              </LabelCard>
            </Col>
            <Col lg={3} xs={12}>
              <LabelCard>
                <Row>
                  <Col xs={12}>
                    Date d{"'"}expiration<Required>*</Required>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <CardExpiryElement
                      onChange={this.props.handleChange}
                      className="card-expire input-stripe"
                    />
                  </Col>
                </Row>
              </LabelCard>
            </Col>
            <Col lg={3} xs={12}>
              <LabelCard>
                <Row>
                  <Col xs={12}>
                    CVC<Required>*</Required>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <CardCVCElement
                      onChange={this.props.handleChange}
                      className="card-cvc input-stripe"
                    />
                  </Col>
                </Row>
              </LabelCard>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

StripeForm.propTypes = {
  submitPayement: PropTypes.func,
  handleChange: PropTypes.func
}
