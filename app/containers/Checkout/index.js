import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Grid, Row, Col } from 'react-flexbox-grid';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCheckout from './selectors';
import reducer from './reducer';
import saga from './saga';

import DeliveryStep from '../../components/DeliveryStep/Loadable';

import Header from '../../components/Header';
import Layout from './Layout';

export class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    };

    this.nextStep = this.nextStep.bind(this);
    this.changeStep = this.changeStep.bind(this);
  }

  nextStep() {
    const { step } = this.state;
    this.setState({ step: step + 1 < 6 ? step + 1 : 6 });
  }

  changeStep(stepElem) {
    this.setState({ step: stepElem });
  }

  render() {
    const { step } = this.state;
    return (
      <div>
        <Layout>
          <Helmet>
            <title>Soutenir ebdo</title>
            <meta name="description" content="Abonnement à ebdo le journal" />
          </Helmet>
          <Grid fluid>
            <Row>
              <Col mdOffset={1} xs={12} md={11}>
                <Header />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <DeliveryStep
                  stepNumber={1}
                  changeStep={this.changeStep}
                  nextStep={this.nextStep}
                  isOpen={step === 1}
                />
              </Col>
            </Row>
          </Grid>
        </Layout>
      </div>
    );
  }
}

Checkout.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'checkout', reducer });
const withSaga = injectSaga({ key: 'checkout', saga });

export default compose(withReducer, withSaga, withConnect)(Checkout);
