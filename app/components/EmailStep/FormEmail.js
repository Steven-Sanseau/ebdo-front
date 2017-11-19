import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Row, Col } from 'react-flexbox-grid'

import InputText from '../InputText'

export default class FormEmail extends React.Component {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {}

    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.state.email = this.props.email
  }

  handleEmail(event) {
    this.setState(
      _.extend(this.props.email, {
        email: event.target.value
      })
    )
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    const { email } = this.props
    return (
      <div>
        <Row>
          <Col xs={12}>
            <form onSubmit={this.handleSubmit}>
              <Row>
                <Col xs={12} lg={6}>
                  <InputText
                    errorMessage="Cet Email est invalide"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={this.handleEmail}
                    placeholder="monemail@gmail.com"
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

FormEmail.propTypes = {
  email: PropTypes.string
}
