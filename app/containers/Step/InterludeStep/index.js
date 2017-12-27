import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import {
  makeSelectOffer,
  makeSelectOfferError,
  makeSelectOffersIsLoading,
  makeSelectOfferErrorMessage
} from 'selectors/offer'
import { setOfferParams, getoffer } from 'actions/offer'

import ToggleStep from 'components/ToggleStep/Loadable'
import TextSummary from 'components/LayoutStep/TextSummary'

class InterludeStep extends React.Component {
  handleNextStep = event => {
    this.props.nextStep()
  }

  contentOpen() {
    return (
      <div>
        <TextSummary>
          Remplissez les prochaines étapes avec vos propres coordonnées (adresse
          email, adresse de facturation). À l’issue de la procédure, nous vous
          enverrons un code cadeau à lui transmettre, qui lui permettra de
          renseigner lui-même son adresse de livraison.
        </TextSummary>
      </div>
    )
  }

  contentClose() {
    return <div>Vous offrez un abonnement à ebdo</div>
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Vous allez offrir un abonnement à un proche"
        stepNumber={stepNumber}
        iconName="monnaie"
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        updateStepHide
        nextStep={this.handleNextStep}
      />
    )
  }
}

InterludeStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps(dispatch) {
  return {}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(InterludeStep)
