import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import {
  makeSelectAddressInvoice,
  makeSelectAddressIsLoading,
  makeSelectAddressCountry
} from 'selectors/address'
import { setAddress, postAddress } from 'actions/address'

import ToggleStep from 'components/ToggleStep/Loadable'
import BoldText from 'components/LayoutStep/BoldText'
import FormDelivery from 'components/FormDelivery'
import UpdateStep from 'components/LayoutStep/UpdateStep'
import Button from 'components/Button'

class DeliveryStep extends React.Component {
  state = {
    isInvoiceSameDelivery: false
  }

  handleChangeStep = () => {
    this.props.changeStep(this.props.stepNumber)
  }

  handleNextStep = event => {
    this.handleSubmitAddressForm(event)
  }

  handleAddressForm = (type, address) => {
    this.props.dispatchChangeAddress(type, address)
  }

  handleSubmitAddressForm = event => {
    event.preventDefault()

    this.props.dispatchPostAddressInvoice()
  }

  contentOpen() {
    const { invoice, country } = this.props

    return (
      <div>
        <FormDelivery
          address={invoice}
          country={country}
          typeOfAddress="invoice"
          handleChange={this.handleAddressForm}
          handleSubmit={this.handleSubmitAddressForm}
        />
      </div>
    )
  }

  contentClose() {
    const { invoice } = this.props

    return (
      <div>
        Je serai facturé à l’adresse suivante : <br />
        <BoldText>
          {invoice.first_name} {invoice.last_name}
        </BoldText>, {invoice.address}, {invoice.postal_code} {invoice.city} ({
          invoice.country
        }).
        <UpdateStep>
          <Button onClick={this.handleChangeStep}>Modifier</Button>
        </UpdateStep>
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
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  dispatchPostAddressInvoice: PropTypes.func,
  dispatchChangeAddress: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  country: makeSelectAddressCountry(),
  addressIsLoading: makeSelectAddressIsLoading(),
  invoice: makeSelectAddressInvoice()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchChangeAddress: (type, address) =>
      dispatch(setAddress(type, address)),
    dispatchPostAddressInvoice: () => dispatch(postAddress('invoice'))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(DeliveryStep)
