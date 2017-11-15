import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Button from '../Button';
import WhiteWrapper from './WhiteWrapper';
import Title from './Title';
import FormDelivery from './FormDelivery';

class DeliveryStep extends React.Component {
  constructor(props) {
    super(props);

    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeStep(this.props.stepNumber);
  }

  render() {
    const { isOpen, nextStep, changeStep, stepNumber } = this.props;
    return (
      <div>
        <Row>
          {isOpen && (
            <Col xs={8} xsOffset={2}>
              <WhiteWrapper>
                <Title>Je renseigne mon adresse de livraison</Title>
                <Row>
                  <Col xs={8} xsOffset={2}>
                    <FormDelivery />
                  </Col>
                </Row>
                <Button handleRoute={nextStep}>Étape Suivante</Button>
              </WhiteWrapper>
            </Col>
          )}
          {!isOpen && (
            <div>
              Close <Button handleRoute={this.change}>Changer</Button>
            </div>
          )}
        </Row>
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
