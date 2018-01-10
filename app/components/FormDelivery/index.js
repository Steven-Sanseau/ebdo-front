import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import _ from 'lodash'
import ReactDOM from 'react-dom'
import places from 'places.js'
import { Row, Col } from 'react-flexbox-grid'
import Phone, { isValidPhoneNumber } from 'react-phone-number-input'

import './phone.css'

import InputText from '../InputText'
import Required from 'components/InputText/Required'
import Input from 'components/InputText/Input'
import ErrorMessage from 'components/InputText/ErrorMessage'

const PhoneWrapper = Input.withComponent(Phone)
const PhoneLabelWrapper = styled.div`
  margin-top: 15px;
  font-family: 'FG-R';
  font-size: 14px;
  line-height: 14px;
  text-align: left;
  color: var(${props => (props.color ? props.color : '--black')});
`

class FormDelivery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countryShowMessage: false,
      countryMessage: ''
    }
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

  handleChange = event => {
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

  handleSubmit = event => {
    this.props.handleSubmit(event, this.props.typeOfAddress)
  }

  handlePlace = event => {
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
                    reference={input => {
                      this.firstNameInput = input
                    }}
                    error={this.props.errorForm.first_name || false}
                    errorMessage={
                      this.props.errorFormMessage.first_name || null
                    }
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
                    error={this.props.errorForm.last_name || false}
                    errorMessage={this.props.errorFormMessage.last_name || null}
                    value={this.props.address.last_name}
                    onChange={this.handleChange}
                    placeholder="Dubois"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={6}>
                  <PhoneLabelWrapper
                    color={this.props.errorForm.phone ? '--tomato' : null}>
                    Téléphone
                    <PhoneWrapper
                      country={this.props.country.value}
                      placeholder="+33 6 00 00 00 00"
                      value={this.props.address.phone}
                      onChange={this.handlePhone}
                      convertToNational
                    />
                    {this.props.errorForm.phone && (
                      <Row>
                        <Col xs={12}>
                          <ErrorMessage>
                            {this.props.errorFormMessage.phone}
                          </ErrorMessage>
                        </Col>
                      </Row>
                    )}
                  </PhoneLabelWrapper>
                </Col>
                <Col xs={12} lg={6}>
                  <InputText
                    label="Société"
                    name="company"
                    error={this.props.errorForm.company || false}
                    errorMessage={this.props.errorFormMessage.company || null}
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
                    error={this.props.errorForm.address || false}
                    errorMessage={this.props.errorFormMessage.address || null}
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
                    error={this.props.errorForm.postal_code || false}
                    errorMessage={
                      this.props.errorFormMessage.postal_code || null
                    }
                    type="number"
                    value={this.props.address.postal_code}
                    onChange={this.handleChange}
                    placeholder="17000"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={8}>
                  <InputText
                    label="Complément d'adresse"
                    name="address_post"
                    error={this.props.errorForm.address_post || false}
                    errorMessage={
                      this.props.errorFormMessage.address_post || null
                    }
                    value={this.props.address.address_post}
                    onChange={this.handleChange}
                    placeholder="bat. A"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6} xs={12}>
                  <InputText
                    label="Ville"
                    name="city"
                    isRequired
                    error={this.props.errorForm.city || false}
                    errorMessage={this.props.errorFormMessage.city || null}
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
  handleSubmit: PropTypes.func,
  errorForm: PropTypes.object,
  errorFormMessage: PropTypes.object
}

export default FormDelivery
