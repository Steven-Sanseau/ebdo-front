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
import ErrorMessage from 'components/InputText/ErrorMessage'
import IconWrapper from 'components/InputCheckbox/IconWrapper'
import SecureSvg from 'components/Icon/SecureSvg'

import './stripe.css'
const LabelCard = styled(Label)`
  margin-top: 15px;
`
export default class StripeForm extends Component {
  state = {}

  handleSubmit = event => {
    this.props.handleSubmit(event)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col lg={6} xs={12}>
              <LabelCard
                color={this.props.errorCardType.card ? '--tomato' : ''}
              >
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
                      style={
                        this.props.errorCardType.card ? { color: 'red' } : {}
                      }
                    />
                    {this.props.errorCardType.card && (
                      <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
                    )}
                  </Col>
                </Row>
              </LabelCard>
            </Col>
            <Col lg={3} xs={12}>
              <LabelCard
                color={this.props.errorCardType.year ? '--tomato' : ''}
              >
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
                    {this.props.errorCardType.year && (
                      <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
                    )}
                  </Col>
                </Row>
              </LabelCard>
            </Col>
            <Col lg={3} xs={12}>
              <LabelCard color={this.props.errorCardType.cvc ? '--tomato' : ''}>
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
                    {this.props.errorCardType.cvc && (
                      <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
                    )}
                  </Col>
                </Row>
              </LabelCard>
            </Col>
          </Row>
          <Row>
            <Col lg={12} xs={12}>
              <p>
                Simple et 100% sécurisée. Nous ne stockons pas vos coordonnées
                bancaires.<br />
                La transaction est effectué par notre partenaire Stripe, leader
                mondial des paiements en ligne.
              </p>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

StripeForm.propTypes = {
  submitPayement: PropTypes.func,
  handleChange: PropTypes.func,
  error: PropTypes.bool,
  errorCardType: PropTypes.object,
  errorMessage: PropTypes.string
}
