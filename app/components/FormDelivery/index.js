import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import _ from 'lodash'
import ReactDOM from 'react-dom'
import places from 'places.js'
import { Row, Col } from 'react-flexbox-grid'
import Phone from 'react-phone-number-input'

import './phone.css'

import InputText from '../InputText'
import Required from 'components/InputText/Required'
import Input from '../InputText/Input'
const PhoneWrapper = Input.withComponent(Phone)
const PhoneLabelWrapper = styled.div`
  margin-top: 15px;
  font-family: 'FG-R';
  font-size: 14px;
  line-height: 14px;
  text-align: left;
  color: var(--black);
`

class FormDelivery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countryShowMessage: false,
      countryMessage: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePlace = this.handlePlace.bind(this)
  }

  componentDidMount() {
    this.addressInput = ReactDOM.findDOMNode(this.addressInput)
    const allowedCountry = this.props.country.value

    this.placesAutocomplete = places({
      container: this.addressInput,
      type: 'address',
      templates: {
        value(suggestion) {
          return suggestion.name
        }
      },
      countries: [allowedCountry]
    })

    this.placesAutocomplete.on('clear', () => {
      this.addressInput.value = ''
    })
  }

  handleChange(event) {
    this.props.handleChange(this.props.typeOfAddress, {
      [event.target.name]: event.target.value
    })
  }
  handlePhone = tel => {
    this.props.handleChange(this.props.typeOfAddress, {
      phone: tel
    })
  }

  showAlertCountry = () => {
    this.setState({
      countryShowMessage: true,
      countryMessage:
        'Si vous souhaitez changer de pays, veuillez modifier votre zone de livraison'
    })
  }

  handleSubmit(event) {
    this.props.handleSubmit(event)
  }

  handlePlace(event) {
    event.preventDefault()
    this.props.handleChange(this.props.typeOfAddress, {
      [event.target.name]: event.target.value
    })
    this.placesAutocomplete.on('change', e => {
      this.props.handleChange(this.props.typeOfAddress, {
        address: e.suggestion.name || '',
        city: e.suggestion.city || '',
        postal_code: e.suggestion.postcode || ''
      })
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <form autoComplete="false" onSubmit={this.handleSubmit}>
              <Row>
                <Col xs={12} lg={6}>
                  <InputText
                    label="Prénom"
                    name="first_name"
                    isRequired
                    value={this.props.address.first_name}
                    onChange={this.handleChange}
                    placeholder="Sabrina"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <InputText
                    label="Nom"
                    name="last_name"
                    isRequired
                    value={this.props.address.last_name}
                    onChange={this.handleChange}
                    placeholder="Dubois"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={6}>
                  <PhoneLabelWrapper>
                    Téléphone <Required>*</Required>
                    <PhoneWrapper
                      country="FR"
                      placeholder="+33 6 00 00 00 00"
                      value={this.props.address.phone}
                      onChange={this.handlePhone}
                      convertToNational
                    />
                  </PhoneLabelWrapper>
                </Col>
                <Col xs={12} lg={6}>
                  <InputText
                    label="Société"
                    name="company"
                    value={this.props.address.company}
                    onChange={this.handleChange}
                    placeholder="Nom de la Société (ex: SARL Dupont)"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={8}>
                  <InputText
                    label="Adresse"
                    id="address-input"
                    name="address"
                    isRequired
                    reference={input => {
                      this.addressInput = input
                    }}
                    value={this.props.address.address}
                    onChange={this.handlePlace}
                    placeholder="10 Bis, rue Simone de Beauvoir"
                  />
                </Col>
                <Col lg={4} xs={12}>
                  <InputText
                    label="Code Postal"
                    name="postal_code"
                    isRequired
                    type="number"
                    value={this.props.address.postal_code}
                    onChange={this.handleChange}
                    placeholder="17000"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6} xs={12}>
                  <InputText
                    label="Ville"
                    name="city"
                    isRequired
                    value={this.props.address.city}
                    onChange={this.handleChange}
                    placeholder="La Rochelle"
                  />
                </Col>
                <Col lg={6} xs={12} onClick={this.showAlertCountry}>
                  <InputText
                    label="Pays"
                    showMessage={this.state.countryShowMessage}
                    message={this.state.countryMessage}
                    name="country"
                    isRequired
                    disabled
                    onChange={() => {}}
                    value={this.props.country.label}
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
  address: PropTypes.object,
  country: PropTypes.object.isRequired,
  typeOfAddress: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default FormDelivery
