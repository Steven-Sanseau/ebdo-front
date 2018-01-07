import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

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
import Image from 'components/Image'

import ButtonAnimate from 'components/ButtonAnim'

import '!file-loader?name=[name].[ext]!images/checkout/PostBox.png'
const ButtonWrap = styled.div`
  margin-top: 40px;
  & > div {
    display: inline-block;
  }
  button {
    font-size: 18px;
  }
`

const LinkWrapper = styled(Link)`
  color: var(--grey-blue);
  text-decoration: none;
  display: inline-block;
  margin-left: 20px;
`

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
      params = { [key]: event.value == 1 }
    }

    if (key === 'duration') {
      const value = Number(event.value)
      params = { [key]: value, time_limited: value !== 0 }
    }

    if (key === 'monthly_price_ttc') {
      params = { [key]: Number(event.value) }
    }

    this.props.dispatchSetOfferParams(params, true)
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
              {/* <ButtonAnimate /> */}
              <FormulaText>
                Les frais de livraison en France (Métropilitaine et outre-mer)
                sont inclus. Les frais de livraison vers un autre pays seront
                ajoutés à l’étape suivante.
              </FormulaText>
            </Col>
          </Row>
          <Row center="xs">
            {offer.data && (
              <div>
                <NaturalFormOrder
                  handleChange={this.handleChange}
                  target={offer.data.is_gift}
                  time={offer.data.duration}
                  price={offer.data.monthly_price_ttc}
                  isNaturalForm={isNaturalForm}
                  switchUI={this.switchUI}
                />

                {isNaturalForm && (
                  <ButtonWrap>
                    <LinkWrapper to="/gift">J'ai un code cadeau</LinkWrapper>
                  </ButtonWrap>
                )}
                {!isNaturalForm && (
                  <ButtonWrap>
                    <Button
                      handleRoute={this.switchUI}
                      color="--squash"
                      className="big">
                      Revenir au formulaire
                    </Button>
                  </ButtonWrap>
                )}
              </div>
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
        <Row>
          <Col lg={5} xs={11}>
            <Image src="PostBox.png" alt="Post box" height={173} />
          </Col>
          <Col lg={7} xs={11}>
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
              <br />
              <BigBoldText>
                soit{' '}
                {offer.data.monthly_price_ttc + offer.data.shipping_cost * 4}
                {'€'}
                /mois au total
              </BigBoldText>
            </TextFormulae>
            {offer.data.country_shipping === 'FR' && (
              <DeliveryText>
                Les frais de livraison en France (Métropolitaine et outre-mer)
                sont inclus.
              </DeliveryText>
            )}
            {offer.data.country_shipping === 'LU' && (
              <DeliveryText>
                Les frais de livraison au Luxembourg sont de 2€ par numéro.
              </DeliveryText>
            )}
            {offer.data.country_shipping === 'BE' && (
              <DeliveryText>
                Les frais de livraison en Belgique sont de 1,5€ par numéro.
              </DeliveryText>
            )}
            <NextStep>
              <Button
                border
                colorText="--silver"
                handleRoute={this.handleGoToStep}
                color="--background">
                Modifier
              </Button>
            </NextStep>
          </Col>
        </Row>
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
    dispatchSetOfferParams: (params, isRedirect) =>
      dispatch(setOfferParams(params, isRedirect)),
    dispatchGetOffer: () => dispatch(getoffer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormulaStep)
