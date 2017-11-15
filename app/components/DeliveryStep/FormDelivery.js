import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Label from './Label';
import Input from './Input';
import InputWrapper from './InputWrapper';
import Required from './Required';

class FormDelivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
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
                            value={this.state.value}
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
                            value={this.state.value}
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
                            value={this.state.value}
                            onChange={this.handleChange}
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
                            value={this.state.value}
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
                          Nom complet
                          <Required>*</Required>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="John Doe"
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
                            value={this.state.value}
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
    );
  }
}

FormDelivery.propTypes = {};

export default FormDelivery;
