import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import ToggleStep from 'components/ToggleStep/Loadable'
import NaturalFormOrder from 'components/NaturalFormOrder'
import FormulaText from './FormulaText'
import BoldText from './BoldText'

class FormulaStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      price: 15,
      target: 'me',
      time: 'inf',
      isNaturalForm: true
    }

    this.handleNextStep = this.handleNextStep.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRoute = this.handleRoute.bind(this)
    this.switchUI = this.switchUI.bind(this)
  }

  handleNextStep(event) {
    event.preventDefault()
    this.props.nextStep()
  }

  handleChange(e, key) {
    this.setState({ [e]: key.value })
  }

  handleRoute() {
    // console.log(e);
  }

  switchUI() {
    this.setState({ isNaturalForm: !this.state.isNaturalForm })
  }

  contentOpen() {
    const { price, isNaturalForm, target, time } = this.state

    return (
      <div>
        <Row>
          <Col xs={11}>
            <FormulaText>
              Les frais de livraison en France (Métropilitaine et outre-mer)
              sont inclus. Les frais de livraison vers un autre pays seront
              ajoutés à l’étape suivante.
            </FormulaText>
          </Col>
        </Row>
        <Row center="xs">
          <NaturalFormOrder
            handleChange={this.handleChange}
            target={target}
            time={time}
            price={price}
            isNaturalForm={isNaturalForm}
            switchUI={this.switchUI}
          />
        </Row>
      </div>
    )
  }

  contentClose() {
    const { price } = this.state
    return (
      <div>
        Je m{"'"}abonne sans engagement pour un montant de{' '}
        <BoldText>{price}€</BoldText>
        <BoldText>/mois</BoldText>
      </div>
    )
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je choisis ma formule"
        stepNumber={stepNumber}
        contentClose={this.contentClose()}
        contentOpen={this.contentOpen()}
        currentStep={currentStep}
        changeStep={changeStep}
        nextStep={this.handleNextStep}
      />
    )
  }
}

FormulaStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}

export default FormulaStep
