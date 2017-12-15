import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ReactDOM from 'react-dom'
import places from 'places.js'
import { Row, Col } from 'react-flexbox-grid'

import InputText from '../InputText'

class FormDelivery extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePlace = this.handlePlace.bind(this)
  }

  componentDidMount() {
    this.adressInput = ReactDOM.findDOMNode(this.adressInput)

    this.placesAutocomplete = places({
      container: this.adressInput,
      type: 'address',
      templates: {
        value(suggestion) {
          return suggestion.name
        }
      },
      countries: ['fr', 'be', 'ca', 'lu']
    })

    this.placesAutocomplete.on('clear', () => {
      this.adressInput.value = ''
    })
  }

  handleChange(event) {
    this.props.handleChange({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit()
  }

  handlePlace(event) {
    event.preventDefault()
    this.handleChange('adress', event.target.value)
    this.placesAutocomplete.on('change', e => {
      this.props.handleChange({
        adress: e.suggestion.name || '',
        city: e.suggestion.hit.city || '',
        postalCode: e.suggestion.postcode || '',
        country: e.suggestion.country || ''
      })
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <form onSubmit={this.handleSubmit}>
              <Row>
                <Col xs={12} lg={6}>
                  <InputText
                    error
                    errorMessage="Veuillez renseigner votre Prénom"
                    label="Prénom"
                    name="first_name"
                    value={this.props.adress.first_name}
                    onChange={this.handleChange}
                    placeholder="Henry"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <InputText
                    error
                    errorMessage="Veuillez renseigner votre Nom"
                    label="Nom"
                    name="last_name"
                    value={this.props.adress.last_name}
                    onChange={this.handleChange}
                    placeholder="Michel"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <InputText
                    label="Société"
                    name="company"
                    value={this.props.adress.company}
                    onChange={this.handleChange}
                    placeholder="Nom de la Société"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={8}>
                  <InputText
                    label="Adresse"
                    id="address-input"
                    name="adress"
                    isRequired
                    reference={input => {
                      this.adressInput = input
                    }}
                    value={this.props.adress.adress}
                    onChange={this.handlePlace}
                    placeholder="Adresse"
                  />
                </Col>
                <Col lg={4} xs={12}>
                  <InputText
                    label="Code Postal"
                    name="postal_code"
                    isRequired
                    value={this.props.adress.postal_code}
                    onChange={this.handleChange}
                    placeholder="00000"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6} xs={12}>
                  <InputText
                    label="Ville"
                    name="city"
                    isRequired
                    value={this.props.adress.city}
                    onChange={this.handleChange}
                    placeholder="Paris"
                  />
                </Col>
                <Col lg={6} xs={12}>
                  <InputText
                    label="Pays"
                    name="country"
                    isRequired
                    value={this.props.adress.country}
                    onChange={this.handleChange}
                    placeholder="Pays"
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

FormDelivery.propTypes = {
  adress: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default FormDelivery
