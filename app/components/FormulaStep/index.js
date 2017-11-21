import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'rc-slider'
import { Row, Col } from 'react-flexbox-grid'

import ToggleStep from '../ToggleStep/Loadable'
import FormulaText from './FormulaText'
import BoldText from './BoldText'
import GreyText from './GreyText'

import Checkbox from 'components/Checkbox'
import InputCheckbox from 'components/InputCheckbox'

import 'rc-slider/assets/index.css'
import './slider.css'

class FormulaStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formula: true,
      isChecked: false,
      price: 12,
      recurring: 0
    }

    this.handleSlider = this.handleSlider.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleCheckboxInput = this.handleCheckboxInput.bind(this)
  }

  handleSlider(choice) {
    this.setState({ price: choice })
  }

  handleCheckbox() {
    this.setState({ isChecked: !this.state.isChecked })
  }

  handleCheckboxInput(value) {
    this.setState({ recurring: value })
  }

  contentOpen() {
    const { formula, isChecked, price, recurring } = this.state
    const marks = {
      5: '5€',
      8: '8€',
      12: '12€',
      20: '20€'
    }

    const textCheckbox = {
      threemonth: `3 Mois (${3 * price}€)`,
      sixmonth: `6 Mois (${6 * price}€)`,
      twelvemonth: `12 Mois (${12 * price}€)`
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
        {isChecked && (
          <Row start="xs">
            <Col xs={12}>
              <Row>
                <Col lg={4} xs={12}>
                  <InputCheckbox
                    text={textCheckbox.threemonth}
                    onCheck={this.handleCheckboxInput}
                    isChecked={recurring === 3}
                    valueCheck={3}
                  />
                </Col>
                <Col lg={4} xs={12}>
                  <InputCheckbox
                    text={textCheckbox.sixmonth}
                    onCheck={this.handleCheckboxInput}
                    isChecked={recurring === 6}
                    valueCheck={6}
                  />
                </Col>
                <Col lg={4} xs={12}>
                  <InputCheckbox
                    text={textCheckbox.twelvemonth}
                    onCheck={this.handleCheckboxInput}
                    isChecked={recurring === 12}
                    valueCheck={12}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </div>
    )
  }

  contentClose() {
    const { price, recurring } = this.state
    return (
      <div>
        Je m{"'"}abonne sans engagement pour un montant de{' '}
        <BoldText>{price}€</BoldText>
        <BoldText>/mois</BoldText>
        {recurring !== 0 && <BoldText> pendant {recurring} mois</BoldText>}
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
