import React from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { isValidPhoneNumber } from 'react-phone-number-input'

import {
  makeSelectAddressInvoice,
  makeSelectAddressIsLoading,
  makeSelectAddressDelivery,
  makeSelectAddressCountry
} from 'selectors/address'
import { setAddress, postAddress, setAddressEqual } from 'actions/address'

import ToggleStep from 'components/ToggleStep/Loadable'
import BoldText from 'components/LayoutStep/BoldText'
import FormDelivery from 'components/FormDelivery'
import CheckboxShowDeliveryForm from 'components/FormDelivery/CheckboxShowDeliveryForm'
import UpdateStep from 'components/LayoutStep/UpdateStep'
import Button from 'components/Button'

class DeliveryStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFormValid: false,
      isInvoiceSameDelivery: true,
      error: {
        invoice: {},
        delivery: {}
      },
      errorMessage: {
        invoice: {},
        delivery: {}
      }
    }
  }

  handleChangeStep = () => {
    this.props.changeStep(this.props.stepNumber)
  }

  handleNextStep = event => {
    this.handleSubmitAddressForm(event)
  }

  showDeliveryForm = () => {
    this.setState({ isInvoiceSameDelivery: !this.state.isInvoiceSameDelivery })
  }

  handleAddressForm = (type, address) => {
    this.props.dispatchChangeAddress(type, address)
    this.setState({ isFormValid: false })
  }

  handleSubmitAddressForm = (event, type) => {
    event.preventDefault()

    if (this.state.isInvoiceSameDelivery) {
      this.validForm('invoice')
      this.props.dispatchAddressEqual()
    } else {
      this.validForm('invoice')
      this.validForm('delivery')
    }

    if (this.state.isFormValid) {
      this.props.dispatchPostAddressDelivery()
      this.props.dispatchPostAddressInvoice()
    }
  }

  validForm = type => {
    const address = this.props[type]

    const error = { invoice: {}, delivery: {} }
    const errorMessage = { invoice: {}, delivery: {} }

    if (address.first_name == null || address.first_name.trim() === '') {
      error[type].first_name = true
      errorMessage[type].first_name = 'Veuillez entrer votre prénom'
    }

    if (address.last_name == null || address.last_name.trim() === '') {
      error[type].last_name = true
      errorMessage[type].last_name = 'Veuillez entrer votre nom'
    }

    if (address.phone.trim() === '' || address.phone === null) {
      error[type].phone = true
      errorMessage[type].phone = 'Veuillez entrer votre numéro de téléphone'
    }

    if (!isValidPhoneNumber(address.phone)) {
      error[type].phone = true
      errorMessage[type].phone = "Votre numéro de téléphone n'est pas valide"
    }

    if (address.city == null || address.city.trim() === '') {
      error[type].city = true
      errorMessage[type].city = 'Veuillez entrer votre ville'
    }

    if (address.postal_code == null || address.postal_code.trim() === '') {
      error[type].postal_code = true
      errorMessage[type].postal_code = 'Veuillez entrer votre code postal'
    }

    if (address.address == null || address.address.trim() === '') {
      error[type].address = true
      errorMessage[type].address = 'Veuillez entrer votre addresse'
    }

    if (address.postal_code == null || address.postal_code.trim() === '') {
      error[type].postal_code = true
      errorMessage[type].postal_code = 'Veuillez entrer votre code postal'
    }

    console.log(address, error, errorMessage)
    this.setState({ error, errorMessage })
  }

  contentOpen() {
    const { isInvoiceSameDelivery } = this.state
    const { delivery, invoice, country, displayDeliveryAddress } = this.props

    return (
      <div>
        <FormDelivery
          address={invoice}
          country={country}
          typeOfAddress="invoice"
          handleChange={this.handleAddressForm}
          handleSubmit={this.handleSubmitAddressForm}
          errorForm={this.state.error.invoice}
          errorFormMessage={this.state.errorMessage.invoice}
        />
        {displayDeliveryAddress && (
          <CheckboxShowDeliveryForm
            isChecked={isInvoiceSameDelivery}
            showDeliveryForm={this.showDeliveryForm}
          />
        )}
        {!isInvoiceSameDelivery && (
          <FormDelivery
            address={delivery}
            country={country}
            typeOfAddress="delivery"
            handleChange={this.handleAddressForm}
            handleSubmit={this.handleSubmitAddressForm}
            errorForm={this.state.error.delivery}
            errorFormMessage={this.state.errorMessage.delivery}
          />
        )}
      </div>
    )
  }

  contentClose() {
    const { delivery, invoice, displayInvoiceAddress } = this.props

    return (
      <div>
        Mes numéros seront envoyés à l’adresse suivante : <br />
        <BoldText>
          {delivery.first_name} {delivery.last_name}
        </BoldText>,{delivery.address}, {delivery.postal_code} {delivery.city} ({
          delivery.country
        }).
        <UpdateStep>
          <Button onClick={this.handleChangeStep}>Modifier</Button>
        </UpdateStep>{' '}
        {displayInvoiceAddress && (
          <div>
            <br />
            Je serai facturé à l’adresse suivante : <br />
            <BoldText>
              {invoice.first_name} {invoice.last_name}
            </BoldText>, {invoice.address}, {invoice.postal_code} {invoice.city}{' '}
            ({invoice.country}).
            <UpdateStep>
              <Button onClick={this.handleChangeStep}>Modifier</Button>
            </UpdateStep>
          </div>
        )}
      </div>
    )
  }

  render() {
    const { currentStep, changeStep, stepNumber, addressIsLoading } = this.props

    return (
      <ToggleStep
        title="Je renseigne mon adresse de facturation"
        iconName="address"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
        isLoadingNextStep={addressIsLoading}
        updateStepHide
      />
    )
  }
}

DeliveryStep.propTypes = {
  addressIsLoading: PropTypes.bool,
  country: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  invoice: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  delivery: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  dispatchPostAddressDelivery: PropTypes.func,
  dispatchPostAddressInvoice: PropTypes.func,
  dispatchAddressEqual: PropTypes.func,
  displayDeliveryAddress: PropTypes.bool,
  dispatchChangeAddress: PropTypes.func
}

DeliveryStep.defaultProps = {
  displayDeliveryAddress: true
}

const mapStateToProps = createStructuredSelector({
  country: makeSelectAddressCountry(),
  addressIsLoading: makeSelectAddressIsLoading(),
  invoice: makeSelectAddressInvoice(),
  delivery: makeSelectAddressDelivery()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchChangeAddress: (type, address) =>
      dispatch(setAddress(type, address)),
    dispatchAddressEqual: () => dispatch(setAddressEqual()),
    dispatchPostAddressDelivery: () => dispatch(postAddress('delivery')),
    dispatchPostAddressInvoice: () => dispatch(postAddress('invoice'))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(DeliveryStep)
