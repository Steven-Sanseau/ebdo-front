import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import {
  makeSelectOffer,
  makeSelectOfferError,
  makeSelectOffersIsLoading,
  makeSelectOfferErrorMessage
} from 'selectors/offer'
import { setOfferParams, getoffer } from 'actions/offer'

import ToggleStep from 'components/ToggleStep/Loadable'
import NaturalFormOrder from 'components/NaturalFormOrder'
import FormulaText from 'components/LayoutStep/FormulaText'
import BigBoldText from 'components/LayoutStep/BigBoldText'
import VioletText from 'components/LayoutStep/VioletText'
import BlueText from 'components/LayoutStep/BlueText'
import GreenText from 'components/LayoutStep/GreenText'
import SupText from 'components/LayoutStep/SupText'
import TextFormulae from 'components/LayoutStep/TextFormulae'
import DeliveryText from 'components/LayoutStep/DeliveryText'
import NextStep from 'components/LayoutStep/NextStep'
import Button from 'components/Button'

import '!file-loader?name=[name].[ext]!images/checkout/PostBox.png'

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

  handleChange(key, event) {
    let params = {}
    if (key === 'is_gift') {
      params = { [key]: event.value === 1 }
    }

    if (key === 'duration') {
      const value = Number(event.value)
      params = { [key]: value, time_limited: value !== 0 }
    }

    if (key === 'monthly_price_ttc') {
      params = { [key]: Number(event.value) }
    }

    this.props.dispatchSetOfferParams(params)
  }

  handleGoToStep = () => {
    this.props.changeStep(this.props.stepNumber)
  }

  handleRoute() {
    // console.log(e);
  }

  switchUI() {
    this.setState({ isNaturalForm: !this.state.isNaturalForm })
  }

  contentOpen() {
    const { isNaturalForm } = this.state
    const { offer, offerError, offerErrorMessage } = this.props

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
                time={offer.data.duration}
                price={offer.data.monthly_price_ttc}
                isNaturalForm={isNaturalForm}
                switchUI={this.switchUI}
              />
            )}
          </Row>
          {offerError && (
            <div>
              Cette offre n'est pas disponible pour le moment, Veuillez choisir
              une autre formule
            </div>
          )}
        </div>
      </div>
    )
  }

  contentClose() {
    const { offer } = this.props
    return (
      <div>
        <TextFormulae>
          {!offer.data.duration && <GreenText>Chaque mois</GreenText>}
          {offer.data.duration && (
            <GreenText>Pendant {offer.data.duration / 4} mois</GreenText>
          )}
          <BigBoldText>, </BigBoldText>
          {offer.data.is_gift && <VioletText> j'offre </VioletText>}
          {!offer.data.is_gift && <VioletText> je reçois </VioletText>}
          <BigBoldText>
            {' '}
            {offer.data.duration} numéros <br /> pour le prix de{' '}
          </BigBoldText>
          <BlueText>
            {offer.data.monthly_price_ttc}€<SupText>/mois</SupText>
          </BlueText>
        </TextFormulae>
        <DeliveryText>
          Les frais de livraison en France (Métropolitaine et outre-mer) sont
          inclus.
        </DeliveryText>
        <NextStep>
          <Button
            border
            colorText="--silver"
            handleRoute={this.handleGoToStep}
            color="--background"
          >
            Modifier
          </Button>
        </NextStep>
      </div>
    )
  }

  render() {
    const {
      currentStep,
      nextStep,
      changeStep,
      stepNumber,
      offerIsLoading
    } = this.props

    return (
      <ToggleStep
        title="Je choisis ma formule"
        stepNumber={stepNumber}
        iconName="monnaie"
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        updateStepHide
        nextStep={this.handleNextStep}
        isLoadingNextStep={offerIsLoading}
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
  offer: PropTypes.object,
  offerError: PropTypes.bool,
  offerIsLoading: PropTypes.bool,
  offerErrorMessage: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  offer: makeSelectOffer(),
  offerIsLoading: makeSelectOffersIsLoading(),
  offerError: makeSelectOfferError(),
  offerErrorMessage: makeSelectOfferErrorMessage()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetOfferParams: params => dispatch(setOfferParams(params)),
    dispatchGetOffer: () => dispatch(getoffer())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(FormulaStep)
