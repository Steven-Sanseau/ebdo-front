import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import places from 'places.js'

// import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'

import Label from './Label'
import Input from './Input'
import InputWrapper from './InputWrapper'
import Required from './Required'

class FormDelivery extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

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
      }
    })

    this.placesAutocomplete.on('clear', () => {
      this.adressInput.textContent = 'none'
    })
  }

  handleChange(event) {}

  handleSubmit(event) {
    event.preventDefault()
  }

  handlePlace(event) {
    event.preventDefault()
    this.props.adress.adress = event.target.value || ''
    this.placesAutocomplete.on('change', e => {
      console.log(e.suggestion)
      this.props.adress.adress = e.suggestion.name || ''
      this.props.adress.city = e.suggestion.city || ''
      this.props.adress.postalCode = e.suggestion.postcode || ''
    })
  }

  render() {
    const adress = this.props.adress
    return (
      <div>
        <Row>
          <Col xs={12}>
            <form onSubmit={this.handleSubmit}>
              <Row>
                <Col xs={12} lg={6}>
                  <InputWrapper>
                    <Label>
                      <Row>
                        <Col xs={12}>
                          Nom complet
                          <Required>*</Required>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Input
                            type="text"
                            name="name"
                            value={adress.name}
                            onChange={this.handleChange}
                            placeholder="John Doe"
                          />
                        </Col>
                      </Row>
                    </Label>
                  </InputWrapper>
                </Col>
                <Col xs={12} lg={6}>
                  <InputWrapper>
                    <Label>
                      <Row>
                        <Col xs={12}>Société</Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Input
                            type="text"
                            name="company"
                            value={adress.company}
                            onChange={this.handleChange}
                            placeholder="Nom de la Société"
                          />
                        </Col>
                      </Row>
                    </Label>
                  </InputWrapper>
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={8}>
                  <InputWrapper>
                    <Label>
                      <Row>
                        <Col xs={12}>
                          Adresse<Required>*</Required>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Input
                            type="text"
                            id="address-input"
                            name="adress"
                            onChange={this.handlePlace}
                            placeholder="Adresse"
                          />
                        </Col>
                      </Row>
                    </Label>
                  </InputWrapper>
                </Col>
                <Col lg={4} xs={12}>
                  <InputWrapper>
                    <Label>
                      <Row>
                        <Col xs={12}>
                          Code Postal<Required>*</Required>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Input
                            type="text"
                            name="postalCode"
                            value={adress.postalCode}
                            onChange={this.handleChange}
                            placeholder="00000"
                          />
                        </Col>
                      </Row>
                    </Label>
                  </InputWrapper>
                </Col>
              </Row>
              <Row>
                <Col lg={6} xs={12}>
                  <InputWrapper>
                    <Label>
                      <Row>
                        <Col xs={12}>
                          Ville
                          <Required>*</Required>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Input
                            type="text"
                            name="city"
                            value={adress.city}
                            onChange={this.handleChange}
                            placeholder="Paris"
                          />
                        </Col>
                      </Row>
                    </Label>
                  </InputWrapper>
                </Col>
                <Col lg={6} xs={12}>
                  <InputWrapper>
                    <Label>
                      <Row>
                        <Col xs={12}>Pays</Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Input
                            type="text"
                            name="country"
                            value={adress.country}
                            onChange={this.placeChange}
                            placeholder="Pays"
                          />
                        </Col>
                      </Row>
                    </Label>
                  </InputWrapper>
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
