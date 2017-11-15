import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Button from '../Button';
import WhiteWrapper from './WhiteWrapper';
import Title from './Title';
import FormDelivery from './FormDelivery';
import SquareCheckout from '../SquareCheckout';
import TextAdress from './TextAdress';

class DeliveryStep extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adress: {
        delivery: {
          name: 'Steven Sanséau',
          adress: '13 rue  marx Dormoy',
          city: 'Paris',
          country: 'France',
          postalCode: '75018'
        },
        invoice: {
          name: 'Steven Sanséau',
          adress: '13 rue  marx Dormoy',
          city: 'Paris',
          country: 'France',
          postalCode: '75018'
        }
      }
    };

    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeStep(this.props.stepNumber);
  }

  render() {
    const { isOpen, nextStep, changeStep, stepNumber } = this.props;
    const { adress } = this.state;

    return (
      <div>
        {isOpen && (
          <Row>
            <Col xs={12}>
              <WhiteWrapper>
                <Row>
                  <Col xs={8} xsOffset={2}>
                    <Row>
                      <Col xs={2}>
                        <Row end="xs">
                          <SquareCheckout number={1} />
                        </Row>
                      </Col>
                      <Col xs={5}>
                        <Title>Je renseigne mon adresse de livraison</Title>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row center="xs">
                  <Col xs={5}>
                    <FormDelivery />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Button handleRoute={nextStep}>Étape Suivante</Button>
                  </Col>
                </Row>
              </WhiteWrapper>
            </Col>
          </Row>
        )}
        {!isOpen && (
          <Row>
            <Col xs={8} xsOffset={2}>
              <Row>
                <Col xs={2}>
                  <Row end="xs">
                    <SquareCheckout checked />
                  </Row>
                </Col>
                <Col xs={5}>
                  <TextAdress>
                    Mes numéros seront envoyés à l'adresse suivante: <br />
                    <b>{adress.delivery.name}</b>, {adress.delivery.adress},{' '}
                    {adress.delivery.postalCode} {adress.delivery.city} ({
                      adress.delivery.country
                    })
                  </TextAdress>
                  <Button onClick={this.change}>Modifier</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

DeliveryStep.propTypes = {
  stepNumber: PropTypes.number,
  isOpen: PropTypes.bool,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
};

export default DeliveryStep;
