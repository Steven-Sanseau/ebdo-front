import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Label from './Label';
import Input from './Input';
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
                <Col xs={6}>
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
                </Col>
                <Col xs={6}>
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
                </Col>
              </Row>
              <Row>
                <Col xs={8}>
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
                </Col>
                <Col xs={4}>
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
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
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
                </Col>
                <Col xs={6}>
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
