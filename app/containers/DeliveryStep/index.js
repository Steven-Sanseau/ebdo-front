import React from 'react'
import PropTypes from 'prop-types'

import ToggleStep from 'components/ToggleStep/Loadable'

import FormDelivery from 'components/FormDelivery'
import CheckboxShowInvoiceForm from 'components/FormDelivery/CheckboxShowInvoiceForm'

class DeliveryStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      adress: {
        delivery: {},
        invoice: {
          name: 'Steven Sanséau',
          adress: '13 rue  marx Dormoy',
          city: 'Paris',
          country: 'France',
          postalCode: '75018'
        }
      },
      isInvoiceSameDelivery: true
    }

    this.showInvoiceForm = this.showInvoiceForm.bind(this)
  }

  showInvoiceForm() {
    this.setState({ isInvoiceSameDelivery: !this.state.isInvoiceSameDelivery })
  }

  contentOpen() {
    const { adress, isInvoiceSameDelivery } = this.state
    return (
      <div>
        <FormDelivery adress={adress.delivery} />
        <CheckboxShowInvoiceForm
          isChecked={isInvoiceSameDelivery}
          showInvoiceForm={this.showInvoiceForm}
        />
        {!isInvoiceSameDelivery && <FormDelivery adress={adress.invoice} />}
      </div>
    )
  }

  contentClose() {
    const { adress } = this.state
    return (
      <div>
        Mes numéros seront envoyés à l{"'"}adresse suivante: <br />
        <b>{adress.delivery.name}</b>, {adress.delivery.adress}, ({
          adress.delivery.company
        })
        {adress.delivery.postalCode} {adress.delivery.city} ({
          adress.delivery.country
        }) Facturation
        <b>{adress.invoice.name}</b>, {adress.invoice.adress}, ({
          adress.invoice.company
        })
        {adress.invoice.postalCode} {adress.invoice.city} ({
          adress.invoice.country
        })
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
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}

export default DeliveryStep
