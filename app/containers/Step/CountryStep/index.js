import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import ColCustom from 'components/Grid/Col'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { setCountryAddress } from 'actions/address'
import { setCountryAddressOfferValid } from 'actions/offer'
import { makeSelectAddressCountry } from 'selectors/address'
import {
  makeSelectOffer,
  makeSelectOfferError,
  makeSelectOfferErrorMessage
} from 'selectors/offer'

import FormCountry from 'components/FormCountry'
import ToggleStep from 'components/ToggleStep/Loadable'
import BoldText from 'components/LayoutStep/BoldText'
import TextSummary from 'components/LayoutStep/TextSummary'
import DeliveryText from 'components/LayoutStep/DeliveryText'

class CountryStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countryList: [
        { label: 'France', value: 'FR' },
        { label: 'Belgique', value: 'BE' },
        { label: 'Suisse', value: 'CH' },
        { label: 'Luxenbourg', value: 'LU' }
      ]
    }

    this.handleNextStep = this.handleNextStep.bind(this)
    this.handleCountry = this.handleCountry.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNextStep() {
    this.handleSubmit()
  }

  handleCountry(country) {
    this.props.dispatchCountryAddress(country)
  }

  handleSubmit() {
    this.props.dispatchValidCountry()
  }

  contentOpen() {
    // const { countryList } = this.state
    const { country, offerError, offerErrorMessage, offer } = this.props
    const countryList = [
      { label: 'France', value: 'FR' },
      {
        label: `Belgique (+${1 * offer.data.duration}€ de frais de port)`,
        value: 'BE'
      },
      {
        label: `Suisse (+${1 * offer.data.duration}€ de frais de port)`,
        value: 'CH'
      },
      {
        label: `Suisse (+${1 * offer.data.duration}€ de frais de port)`,
        value: 'LU'
      }
    ]
    return (
      <div>
        <ColCustom w={9} w-m={15}>
          <FormCountry
            handleCountry={this.handleCountry}
            handleSubmitCountry={this.handleSubmit}
            country={country}
            countryList={countryList}
          />
          {offerError && (
            <div>
              Cette offre n'est pas disponible pour le moment, Veuillez choisir
              une autre formule
              {offerErrorMessage}
            </div>
          )}
        </ColCustom>
      </div>
    )
  }

  contentClose() {
    const { country, offer } = this.props
    return (
      <span>
        Je me ferai livrer <BoldText>en {country.label}</BoldText>{' '}
        {country.value === 'FR' && <span>(aucun frais supplémentaire)</span>}
        {country.value !== 'FR' && (
          <span>
            (des frais supplémentaires de{' '}
            {offer.data.shipping_cost * offer.data.duration} € ont été
            appliqués)
          </span>
        )}
      </span>
    )
  }

  render() {
    const {
      currentStep,
      changeStep,
      stepNumber,
      clientIsLoading,
      offer
    } = this.props

    return (
      <ToggleStep
        title="Je choisis ma zone de livraison"
        stepNumber={stepNumber}
        iconName="save"
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
        isLoadingNextStep={clientIsLoading}
        textButtonNextStep={
          offer.data.country_shipping !== 'FR'
            ? 'Étape suivante (+12€ de frais de port)'
            : null
        }
        colorButtonNextStep={
          offer.data.country_shipping !== 'FR' ? '--squash' : '--booger'
        }
      />
    )
  }
}

CountryStep.propTypes = {
  clientIsLoading: PropTypes.bool,
  country: PropTypes.object,
  changeStep: PropTypes.func,
  currentStep: PropTypes.number,
  stepNumber: PropTypes.number,
  dispatchCountryAddress: PropTypes.func,
  dispatchValidCountry: PropTypes.func,
  offer: PropTypes.object,
  offerError: PropTypes.bool,
  offerErrorMessage: PropTypes.string
}

CountryStep.defaultProps = {
  country: { value: 'FR' }
}

const mapStateToProps = createStructuredSelector({
  country: makeSelectAddressCountry(),
  offer: makeSelectOffer(),
  offerError: makeSelectOfferError(),
  offerErrorMessage: makeSelectOfferErrorMessage()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchCountryAddress: country => dispatch(setCountryAddress(country)),
    dispatchValidCountry: () => dispatch(setCountryAddressOfferValid())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(CountryStep)
