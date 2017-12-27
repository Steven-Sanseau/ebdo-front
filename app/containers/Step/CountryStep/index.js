import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { setCountryAddress } from 'actions/address'
import { makeSelectAddressCountry } from 'selectors/address'

import FormCountry from 'components/FormCountry'
import ToggleStep from 'components/ToggleStep/Loadable'
import BoldText from 'components/LayoutStep/BoldText'
import TextSummary from 'components/LayoutStep/TextSummary'

class CountryStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countryList: [
        { label: 'France', value: 'FR' },
        { label: 'Luxenbourg', value: 'LU' },
        { label: 'Belgique', value: 'BE' }
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
    this.props.nextStep()
  }

  contentOpen() {
    const { countryList } = this.state
    const { country } = this.props

    return (
      <div>
        <TextSummary>
          La livraison en France est comprise dans notre offre. Vous pouvez à ce
          stade choisir un pays de livraison différent, nous recalculerons les
          frais de port qui viendront s’ajouter au prix total. Votre pays n’est
          pas dans la liste ? Suggérez-le nous.
        </TextSummary>
        <FormCountry
          handleCountry={this.handleCountry}
          handleSubmitCountry={this.handleSubmit}
          country={country}
          countryList={countryList}
        />
        {country.value !== 'FR' && (
          <TextSummary>
            La livraison en {country.label} ajoute 6€ de frais de livraison tous
            les mois. Ce changement a été appliqué à votre panier.
          </TextSummary>
        )}
      </div>
    )
  }

  contentClose() {
    const { country } = this.props
    return (
      <div>
        Je me ferai livrer <BoldText>en {country.label}</BoldText>{' '}
        {country.value === 'FR' && <span>(aucun frais supplémentaire)</span>}
        {country.value !== 'FR' && (
          <span>(des frais supplémentaires de 6€ ont été appliqués)</span>
        )}
      </div>
    )
  }

  render() {
    const { currentStep, changeStep, stepNumber, clientIsLoading } = this.props

    return (
      <ToggleStep
        title="Je calcule mes frais de livraison"
        stepNumber={stepNumber}
        iconName="save"
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
        isLoadingNextStep={clientIsLoading}
      />
    )
  }
}

CountryStep.propTypes = {
  clientIsLoading: PropTypes.bool,
  country: PropTypes.object,
  changeStep: PropTypes.func,
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number,
  dispatchCountryAddress: PropTypes.func
}

CountryStep.defaultProps = {
  country: { value: 'FR' }
}

const mapStateToProps = createStructuredSelector({
  country: makeSelectAddressCountry()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchCountryAddress: country => dispatch(setCountryAddress(country))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(CountryStep)
