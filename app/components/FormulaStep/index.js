import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'rc-slider'
import { Row, Col } from 'react-flexbox-grid'

import ToggleStep from '../ToggleStep/Loadable'
import FormulaText from './FormulaText'
import InputCheckbox from '../InputCheckbox'
import BoldText from './BoldText'
import GreyText from './GreyText'

import Checkbox from 'components/Checkbox'

import 'rc-slider/assets/index.css'
import './slider.css'

class FormulaStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formula: true,
      isChecked: false
    }

    this.handleSlider = this.handleSlider.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleSlider(event) {
    console.log(event)
  }
  handleCheckbox() {
    this.setState({ isChecked: !this.state.isChecked })
  }

  contentOpen() {
    const { formula, isChecked } = this.state
    const marks = {
      5: '5€',
      8: '8€',
      12: '12€',
      20: '20€'
    }

    return (
      <div>
        <Row>
          <Col xs={11}>
            <FormulaText>
              <BoldText>ebdo</BoldText> met en place un abonnement solidaire.
              Nous vous proposons de choisir le montant de votre abonnement, en
              fonction de votre engagement et de vos moyens. Avec notre{' '}
              <BoldText>formule libre</BoldText>, vous êtes prélevés
              mensuellement et pouvez résilier votre abonnement à tout moment,{' '}
              <GreyText>très simplement</GreyText>.
            </FormulaText>
          </Col>
        </Row>
        <Row center="xs">
          <Col lg={6} xs={11}>
            <Slider
              min={5}
              max={20}
              marks={marks}
              step={null}
              onChange={this.handleSlider}
              defaultValue={12}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={11}>
            <FormulaText>
              Avec un abonnement de <BoldText>12€ par mois</BoldText>, vous
              participez à hauteur du montant « responsable ». Vous participez
              aux frais de rédation, d’impression et de distribution d’<BoldText
              >
                ebdo
              </BoldText>.
            </FormulaText>
            <FormulaText>
              <BoldText>Vous êtes allergique aux abonnements ? </BoldText>On
              vous comprend. Vous pouvez opter pour une formule à durée limitée.
              Vous règlerez en une fois, à hauteur du montant que vous venez de
              choisir.
            </FormulaText>
          </Col>
        </Row>
        <Row start="xs">
          <Col xs={12}>
            <Checkbox
              text="Je veux m'engager pour une durée fixe"
              onCheck={this.handleCheckbox}
              isChecked={isChecked}
            />
          </Col>
        </Row>
      </div>
    )
  }

  contentClose() {
    return <div>Je mabonne sans engagement pour un montant de </div>
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
        nextStep={nextStep}
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
