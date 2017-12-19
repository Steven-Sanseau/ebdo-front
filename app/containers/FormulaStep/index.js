import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { makeSelectOffer } from 'selectors/offer'
import { setOfferParams, getoffer } from 'actions/offer'

import ToggleStep from 'components/ToggleStep/Loadable'
import NaturalFormOrder from 'components/NaturalFormOrder'
import FormulaText from 'components/LayoutStep/FormulaText'
import BoldText from 'components/LayoutStep/BoldText'

class FormulaStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isNaturalForm: true
    }

    this.handleNextStep = this.handleNextStep.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRoute = this.handleRoute.bind(this)
    this.switchUI = this.switchUI.bind(this)
  }

  handleNextStep(event) {
    event.preventDefault()
    this.props.dispatchGetOffer()
  }

  handleChange(e, key) {
    this.props.dispatchSetOfferParams({ [e]: key.value })
  }

  handleRoute() {
    // console.log(e);
  }

  switchUI() {
    this.setState({ isNaturalForm: !this.state.isNaturalForm })
  }

  contentOpen() {
    const { isNaturalForm } = this.state
    const { offer } = this.props

    return (
      <div>
        <div>
          <Row>
            <Col xs={11}>
              <FormulaText>
                Les frais de livraison en France (Métropilitaine et outre-mer)
                sont inclus. Les frais de livraison vers un autre pays seront
                ajoutés à l’étape suivante.
              </FormulaText>
            </Col>
          </Row>
          <Row center="xs">
            {offer.data && (
              <NaturalFormOrder
                handleChange={this.handleChange}
                target={offer.data.is_gift}
                time={offer.data.time_limited}
                price={offer.data.monthly_price_ttc}
                isNaturalForm={isNaturalForm}
                switchUI={this.switchUI}
              />
            )}
          </Row>
        </div>
      </div>
    )
  }

  contentClose() {
    const { offer } = this.props
    return (
      <div>
        Je m{"'"}abonne sans engagement pour un montant de{' '}
        <BoldText>{offer.data.monthly_price_ttc}€</BoldText>
        <BoldText>/mois</BoldText>
      </div>
    )
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je choisis ma formule"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
      />
    )
  }
}

FormulaStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func,
  dispatchSetOfferParams: PropTypes.func,
  dispatchGetOffer: PropTypes.func,
  offer: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  offer: makeSelectOffer()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetOfferParams: params => dispatch(setOfferParams(params)),
    dispatchGetOffer: () => dispatch(getoffer())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(FormulaStep)
