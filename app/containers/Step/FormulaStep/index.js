import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import ColCustom from 'components/Grid/Col'
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
const Price = styled.div`
  font-size: 14px;
  color: var(--space-grey);
`

const ColCustomTextFormulae = styled(ColCustom)`
  margin-top: 5%;
`

class FormulaStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAnim: true,
      isNaturalForm: true
    }
  }
  handleAnimationEnding = () => {
    this.setState({ isAnim: false })
  }
  handleNextStep = event => {
    this.setState({ isAnim: true })
    event.preventDefault()
    this.props.dispatchGetOffer()
  }

  handleChange = (key, event) => {
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

  switchUI = () => {
    this.setState({ isNaturalForm: !this.state.isNaturalForm })
  }

  contentOpen() {
    const { isNaturalForm } = this.state
    const { offer, offerError, offerErrorMessage } = this.props

    return (
      <div>
        <Row>
          <FormulaText>
            Les frais de livraison en France (Métropilitaine et outre-mer) sont
            inclus. Les frais de livraison vers un autre pays seront ajoutés à
            l’étape suivante.
          </FormulaText>
        </Row>
        <Row center="xs" start="md">
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
              {!isNaturalForm && (
                <ButtonWrap>
                  <Button
                    handleRoute={this.switchUI}
                    color="--squash"
                    className="big">
                    Merci pour les explications Thierry
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
    )
  }

  contentClose() {
    const { offer } = this.props
    return (
      <div>
        <Row>
          <ColCustom w={9}>
            {offer.data.is_gift && (
              <Image
                src="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/giftebdo.png"
                alt="J'offre un abonnement ebdo illustration"
                width="100%"
              />
            )}
            {!offer.data.is_gift && (
              <Image
                src="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/checkout.png"
                alt="Je m'abonne à ebdo illustration"
                width="100%"
              />
            )}
          </ColCustom>
          <ColCustomTextFormulae w={12}>
            <TextFormulae>
              {offer.data.is_gift && <VioletText>J'offre </VioletText>}
              {!offer.data.is_gift && <VioletText>Je reçois</VioletText>}
              <BigBoldText> ebdo </BigBoldText>
              {/* {!offer.data.duration && <GreenText>chaque mois</GreenText>} */}
              {offer.data.duration !== 0 &&
                offer.data.duration && (
                  <GreenText>pendant {offer.data.duration / 4} mois</GreenText>
                )}
              {offer.data.time_limited === true && (
                <BigBoldText>
                  , <br />
                </BigBoldText>
              )}
              <BigBoldText> pour </BigBoldText>
              <BlueText>
                {offer.data.monthly_price_ttc}€<SupText>/mois</SupText>
              </BlueText>{' '}
              {offer.data.duration === 0 && <br />}
              {offer.data.duration > 0 && (
                <BigBoldText>
                  soit{' '}
                  {offer.data.duration !== 0 &&
                    (offer.data.monthly_price_ttc / 4 +
                      offer.data.shipping_cost) *
                      offer.data.duration}
                  {offer.data.duration === 0 &&
                    offer.data.monthly_price_ttc + offer.data.shipping_cost * 4}
                  {'€ '} au total.
                </BigBoldText>
              )}
            </TextFormulae>
            {offer.data.country_shipping === 'FR' && (
              <DeliveryText>
                Les frais de livraison en France (Métropolitaine et outre-mer)
                sont inclus.
              </DeliveryText>
            )}
            {offer.data.country_shipping !== 'FR' && (
              <DeliveryText>
                Les frais de livraison{' '}
                {offer.data.country_shipping === 'BE' && 'en Belgique'}
                {offer.data.country_shipping === 'LU' && 'au Luxembourg'}{' '}
                {offer.data.country_shipping === 'CH' && 'en Suisse'} sont de{' '}
                {offer.data.shipping_cost}€ par numéro.<br />
                Soit{' '}
                {offer.data.time_limited === true && (
                  <span>
                    {offer.data.monthly_price_ttc / 4 * offer.data.duration}€ +{' '}
                    {offer.data.shipping_cost * offer.data.duration}€ de frais
                    de port{' '}
                  </span>
                )}
                {offer.data.time_limited === false && (
                  <span>
                    {offer.data.monthly_price_ttc}€ +{' '}
                    {offer.data.shipping_cost * 4}€ de frais de port
                  </span>
                )}
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
          </ColCustomTextFormulae>
        </Row>
      </div>
    )
  }

  render() {
    const { isNaturalForm } = this.state
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
        hideNextStep={!isNaturalForm}
        hideIconChecked
        hideOffsetClose
        secondaryButton={this.SecondaryButton}
        nextStep={this.handleNextStep}
        isLoadingNextStep={offerIsLoading}
      />
    )
  }
}

FormulaStep.propTypes = {
  stepNumber: PropTypes.number,
  stepUrl: PropTypes.string,
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
