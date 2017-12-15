import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import {
  makeSelectAdress,
  makeSelectAdressInvoice,
  makeSelectAdressDelivery
} from 'containers/Checkout/selectors'
import { setAdress, postAdress } from 'containers/Checkout/actions'

import ToggleStep from 'components/ToggleStep/Loadable'
import FormDelivery from 'components/FormDelivery'
import CheckboxShowInvoiceForm from 'components/FormDelivery/CheckboxShowInvoiceForm'

class DeliveryStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isInvoiceSameDelivery: true
    }

    this.showInvoiceForm = this.showInvoiceForm.bind(this)
    this.handleAdressForm = this.handleAdressForm.bind(this)
    this.handleSubmitAdressForm = this.handleSubmitAdressForm.bind(this)
  }

  showInvoiceForm() {
    this.setState({ isInvoiceSameDelivery: !this.state.isInvoiceSameDelivery })
  }

  handleAdressForm(adress) {
    this.props.dispatchChangeAdress('delivery', adress)
  }

  handleSubmitAdressForm(event) {
    event.preventDefault()
  }

  contentOpen() {
    const { isInvoiceSameDelivery } = this.state
    const { delivery, invoice } = this.props

    return (
      <div>
        <FormDelivery
          adress={delivery}
          handleChange={this.handleAdressForm}
          handleSubmit={this.handleSubmitAdressForm}
        />
        <CheckboxShowInvoiceForm
          isChecked={isInvoiceSameDelivery}
          showInvoiceForm={this.showInvoiceForm}
        />
        {!isInvoiceSameDelivery && (
          <FormDelivery
            adress={invoice}
            handleChange={this.handleAdressForm}
            handleSubmit={this.handleSubmitAdressForm}
          />
        )}
      </div>
    )
  }

  contentClose() {
    const { delivery, invoice } = this.props
    return (
      <div>
        Mes numéros seront envoyés à l{"'"}adresse suivante: <br />
        <b>{delivery.name}</b>, {delivery.adress}, ({delivery.company})
        {delivery.postalCode} {delivery.city} ({delivery.country}) Facturation
        <b>{invoice.name}</b>, {invoice.adress}, ({invoice.company})
        {invoice.postalCode} {invoice.city} ({invoice.country})
      </div>
    )
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je renseigne mon adresse"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={nextStep}
      />
    )
  }
}

DeliveryStep.propTypes = {
  adress: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  invoice: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  delivery: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func,
  dispatchPostAdress: PropTypes.func,
  dispatchChangeAdress: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  adress: makeSelectAdress(),
  invoice: makeSelectAdressInvoice(),
  delivery: makeSelectAdressDelivery()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchChangeAdress: (type, adress) => dispatch(setAdress(type, adress)),
    dispatchPostAdress: () => dispatch(postAdress())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(DeliveryStep)
