import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import places from 'places.js'
import { Row, Col } from 'react-flexbox-grid'

import InputText from '../InputText'

class FormDelivery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      adress: {}
    }

    this.handleName = this.handleName.bind(this)
    this.handleCompany = this.handleCompany.bind(this)
    this.handlePostalCode = this.handlePostalCode.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.handleCountry = this.handleCountry.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePlace = this.handlePlace.bind(this)
  }

  componentDidMount() {
    this.adressInput = document.querySelector('#address-input')
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
      this.adressInput.textContent = 'none'
    })

    this.state = this.props.adress
  }

  handleName(event) {
    this.handleChange('name', event.target.value)
  }

  handleCompany(event) {
    this.handleChange('company', event.target.value)
  }

  handlePostalCode(event) {
    this.handleChange('postalCode', event.target.value)
  }

  handleCity(event) {
    this.handleChange('city', event.target.value)
  }

  handleCountry(event) {
    this.handleChange('country', event.target.value)
  }

  handleChange(key, val) {
    event.preventDefault()
    this.setState(
      _.extend(this.props.adress, {
        [key]: val
      })
    )
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handlePlace(event) {
    event.preventDefault()
    this.handleChange('adress', event.target.value)
    this.placesAutocomplete.on('change', e => {
      this.setState(
        _.extend(this.props.adress, {
          adress: e.suggestion.name || '',
          city: e.suggestion.hit.city || '',
          postalCode: e.suggestion.postcode || '',
          country: e.suggestion.country || ''
        })
      )
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
                    label="Nom"
                    name="name"
                    value={this.props.adress.name}
                    onChange={this.handleName}
                    placeholder="Henry Michel"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <InputText
                    label="Société"
                    name="company"
                    value={this.props.adress.company}
                    onChange={this.handleCompany}
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
                    value={this.props.adress.adress}
                    onChange={this.handlePlace}
                    placeholder="Adresse"
                  />
                </Col>
                <Col lg={4} xs={12}>
                  <InputText
                    label="Code Postal"
                    name="postalCode"
                    isRequired
                    value={this.props.adress.postalCode}
                    onChange={this.handlePostalCode}
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
                    onChange={this.handleCity}
                    placeholder="Paris"
                  />
                </Col>
                <Col lg={6} xs={12}>
                  <InputText
                    label="Pays"
                    name="country"
                    isRequired
                    value={this.props.adress.country}
                    onChange={this.handleCountry}
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
  adress: PropTypes.object
}

export default FormDelivery
