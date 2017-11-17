import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import ToggleStep from '../ToggleStep/Loadable'

import FormDelivery from './FormDelivery'

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
      }
    }
  }

  contentOpen() {
    const { adress } = this.state
    return <FormDelivery adress={adress.delivery} />
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
