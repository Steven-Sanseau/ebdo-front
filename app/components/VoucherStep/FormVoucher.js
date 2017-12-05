import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Row, Col } from 'react-flexbox-grid'

import InputText from '../InputText'

export default class FormVoucher extends React.Component {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {}

    this.handleVoucher = this.handleVoucher.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.state.voucher = this.props.voucher
  }

  handleVoucher(event) {
    this.setState(
      _.extend(this.props.voucher, {
        voucher: event.target.value
      })
    )
  }

  validateEmail(event) {
    const voucherInput = event.target.value

    if (voucherInput === '') {
      return false
    }

    return true
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    const { voucher } = this.props
    return (
      <div>
        <Row>
          <Col xs={12}>
            <form onSubmit={this.handleSubmit}>
              <Row>
                <Col xs={12} lg={6}>
                  <InputText
                    errorMessage="Cet Code promo est invalide"
                    label="Code Promo"
                    name="voucher"
                    value={voucher}
                    onChange={this.handleVoucher}
                    placeholder="Code promo"
                  />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}

FormVoucher.propTypes = {
  voucher: PropTypes.string
}
