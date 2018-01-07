import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

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
      isInvoiceSameDelivery: true
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
  }

  handleSubmitAddressForm = event => {
    event.preventDefault()

    if (this.state.isInvoiceSameDelivery) {
      this.props.dispatchAddressEqual()
    }

    this.props.dispatchPostAddressDelivery()
    this.props.dispatchPostAddressInvoice()
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
        title="Je renseigne mon adresse"
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
