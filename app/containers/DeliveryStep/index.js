import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import {
  makeSelectAdressInvoice,
  makeSelectAdressIsLoading,
  makeSelectAdressDelivery,
  makeSelectAdressCountry
} from 'selectors/adress'
import { setAdress, postAdress, setAdressEqual } from 'actions/adress'

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
    this.handleNextStep = this.handleNextStep.bind(this)
  }

  handleNextStep(event) {
    this.handleSubmitAdressForm(event)
  }

  showInvoiceForm() {
    this.setState({ isInvoiceSameDelivery: !this.state.isInvoiceSameDelivery })
  }

  handleAdressForm(type, adress) {
    this.props.dispatchChangeAdress(type, adress)
  }

  handleSubmitAdressForm(event) {
    event.preventDefault()

    if (this.state.isInvoiceSameDelivery) {
      this.props.dispatchAdressEqual()
    }

    this.props.dispatchPostAdressDelivery()
    this.props.dispatchPostAdressInvoice()
  }

  contentOpen() {
    const { isInvoiceSameDelivery } = this.state
    const { delivery, invoice, country } = this.props

    return (
      <div>
        <FormDelivery
          adress={delivery}
          country={country}
          typeOfAdress="delivery"
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
            country={country}
            typeOfAdress="invoice"
            handleChange={this.handleAdressForm}
            handleSubmit={this.handleSubmitAdressForm}
          />
        )}
      </div>
    )
  }

  contentClose() {
    const { delivery, invoice } = this.props
    console.log(delivery, invoice)
    return (
      <div>
        Mes numéros seront envoyés à l{"'"}adresse suivante: <br />
      </div>
    )
  }

  render() {
    const { currentStep, changeStep, stepNumber, adressIsLoading } = this.props

    return (
      <ToggleStep
        title="Je renseigne mon adresse"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
        isLoadingNextStep={adressIsLoading}
      />
    )
  }
}

DeliveryStep.propTypes = {
  adressIsLoading: PropTypes.bool,
  country: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  invoice: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  delivery: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  dispatchPostAdressDelivery: PropTypes.func,
  dispatchPostAdressInvoice: PropTypes.func,
  dispatchAdressEqual: PropTypes.func,
  dispatchChangeAdress: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  country: makeSelectAdressCountry(),
  adressIsLoading: makeSelectAdressIsLoading(),
  invoice: makeSelectAdressInvoice(),
  delivery: makeSelectAdressDelivery()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchChangeAdress: (type, adress) => dispatch(setAdress(type, adress)),
    dispatchAdressEqual: () => dispatch(setAdressEqual()),
    dispatchPostAdressDelivery: () => dispatch(postAdress('delivery')),
    dispatchPostAdressInvoice: () => dispatch(postAdress('invoice'))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(DeliveryStep)
