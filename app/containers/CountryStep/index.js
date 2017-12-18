import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { setCountryAdress } from 'actions/adress'

import FormCountry from 'components/FormCountry'
import ToggleStep from 'components/ToggleStep/Loadable'

class CountryStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countryList: [
        { label: 'France', value: 'FR' },
        { label: 'Luxenbourg', value: 'LU' },
        { label: 'Belgique', value: 'BE' }
      ],
      country: {}
    }

    this.handleNextStep = this.handleNextStep.bind(this)
    this.handleCountry = this.handleCountry.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNextStep(event) {
    this.handleSubmit(event)
    this.props.nextStep()
  }

  handleCountry(country) {
    this.setState({ country: { label: country.label, value: country.value } })
    this.props.dispatchCountryAdress(this.state.country)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatchCountryAdress(this.state.country)
  }

  contentOpen() {
    const { countryList, country } = this.state

    return (
      <div>
        La livraison en France est comprise dans notre offre. Vous pouvez à ce
        stade choisir un pays de livraison différent, nous recalculerons les
        frais de port qui viendront s’ajouter au prix total. Votre pays n’est
        pas dans la liste ? Suggérez-le nous.
        <FormCountry
          handleCountry={this.handleCountry}
          handleSubmitCountry={this.handleSubmit}
          country={country}
          countryList={countryList}
        />
      </div>
    )
  }

  contentClose() {
    const { email } = this.props
    return <div>Mon Email est {email}</div>
  }

  render() {
    const { currentStep, changeStep, stepNumber, clientIsLoading } = this.props

    return (
      <ToggleStep
        title="Je calcule mes frais de livraison"
        stepNumber={stepNumber}
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
  email: PropTypes.string,
  changeStep: PropTypes.func,
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
  stepNumber: PropTypes.number,
  dispatchCountryAdress: PropTypes.func
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps(dispatch) {
  return {
    dispatchCountryAdress: country => dispatch(setCountryAdress(country))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(CountryStep)
