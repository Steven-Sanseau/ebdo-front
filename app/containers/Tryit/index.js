import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-flexbox-grid'

// STATE
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// SELECTOR
import { makeSelectStep } from 'selectors/step'
import { nextStep, goToStep } from 'actions/step'
import { newCheckout } from 'actions/checkout'

// CONTAINERS
import EmailConfirmStep from 'containers/Step/EmailConfirmStep/Loadable'
import EmailStep from 'containers/Step/EmailStep/Loadable'
import DeliveryStep from 'containers/Step/DeliveryStep/Loadable'
import ConfirmStep from 'containers/Step/ConfirmStep/Loadable'

// COMPONENTS
import Header from 'components/Header'
import Layout from 'containers/Checkout/Layout'
import VioletText from 'components/LayoutStep/VioletText'
import BigBoldText from 'components/LayoutStep/BigBoldText'
import BoldText from 'components/LayoutStep/BoldText'
import TextSummary from 'components/LayoutStep/TextSummary'
import Image from 'components/Image'

import ButtonSticky from 'components/StickyHelpCheckout'

import '!file-loader?name=[name].[ext]!images/0-couv.jpg'

export class Tryit extends React.Component {
  constructor(props) {
    super(props)

    this.nextStep = this.nextStep.bind(this)
    this.changeStep = this.changeStep.bind(this)
  }

  componentDidMount() {
    this.props.dispatchNewCheckout()
  }

  nextStep() {
    this.props.nextStep()
  }

  changeStep(stepNumber) {
    this.props.goToStep(stepNumber)
  }

  handleRouteButtonHelp = event => {
    console.log('HELP CLIC')
  }

  render() {
    const { step } = this.props

    return (
      <div>
        <Layout>
          <Helmet>
            <title>Soutenir ebdo</title>
            <meta name="description" content="Abonnement à ebdo le journal" />
          </Helmet>
          <Row center="xs" start="lg">
            <Col xs={12}>
              <Header />
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12}>
              <Row start="lg" center="xs">
                <Col lg={2} lgOffset={3} xs={12}>
                  <Image
                    src="0-couv.jpg"
                    alt="ebdo couverture magazine gratuit"
                    width={174}
                  />
                </Col>
                <Col lg={5} xs={12}>
                  <BigBoldText>
                    Vous voulez <VioletText>essayer ebdo ?</VioletText> On vous
                    offre le prochain numéro.
                  </BigBoldText>
                  <TextSummary>
                    Vous nous laissez vos coordonnées, <BoldText>ebdo</BoldText>{' '}
                    vous fait parvenir son nouveau numéro vendredi prochain.
                  </TextSummary>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <EmailStep
                stepNumber={1}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <EmailConfirmStep
                stepNumber={2}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <DeliveryStep
                stepNumber={3}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ConfirmStep
                stepNumber={4}
                changeStep={this.changeStep}
                nextStep={this.nextStep}
                currentStep={step}
              />
            </Col>
          </Row>
          <ButtonSticky handleRoute={this.handleRouteButtonHelp} />
        </Layout>
      </div>
    )
  }
}

Tryit.propTypes = {
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  dispatchNewCheckout: PropTypes.func,
  nextStep: PropTypes.func,
  goToStep: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  step: makeSelectStep()
})

function mapDispatchToProps(dispatch) {
  return {
    nextStep: () => dispatch(nextStep()),
    dispatchNewCheckout: () => dispatch(newCheckout()),
    goToStep: step => dispatch(goToStep(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tryit)
