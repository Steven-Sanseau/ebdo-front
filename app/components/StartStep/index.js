import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import { Row, Col } from 'react-flexbox-grid'

import ToggleStep from '../ToggleStep/Loadable'

import InputCheckbox from 'components/InputCheckbox'
import DropdownInput from 'components/DropdownInput'

class StartStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      startNow: true,
      startDate: null
    }

    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleCheckbox() {
    this.setState({ startNow: !this.state.startNow })
  }

  handleSelect(value) {
    this.setState({ startDate: value.value })
  }

  getNextFriday() {
    const options = []
    for (let i = 0; i < 20; i++) {
      const date = Moment()
        .add(7 * i, 'day')
        .day(5)

      options.push({
        label: `Vendredi ${date.format('DD/MM/YYYY')}`,
        value: date.format()
      })
    }
    return options
  }

  contentOpen() {
    const { startNow, startDate } = this.state
    const options = this.getNextFriday()

    return (
      <div>
        <Row start="xs">
          <Col xs={12}>
            <Row>
              <Col lg={6} xs={12}>
                <InputCheckbox
                  text="La semaine prochaine"
                  onCheck={this.handleCheckbox}
                  isChecked={startNow}
                  valueCheck={3}
                />
              </Col>
              <Col lg={6} xs={12}>
                <InputCheckbox
                  text="A une date ultérieure"
                  onCheck={this.handleCheckbox}
                  isChecked={!startNow}
                  valueCheck={6}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        {!startNow && (
          <Row start="xs">
            <Col xs={12} lg={6}>
              <DropdownInput
                label="Choisir la date de prise d'effet:"
                placeholder="Vendredi JJ / MM / AAAA"
                handleChange={this.handleSelect}
                options={options}
                value={startDate}
              />
            </Col>
          </Row>
        )}
      </div>
    )
  }

  contentClose() {
    const { startNow, startDate } = this.state
    return (
      <div>
        Mon abonnement débutera avec la reception de mon premier numéro le
        {!startNow && <div>{startDate}</div>}
      </div>
    )
  }

  render() {
    const { currentStep, nextStep, changeStep, stepNumber } = this.props

    return (
      <ToggleStep
        title="Je choisis la date de demarage de mon abonnement"
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

StartStep.propTypes = {
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}
export default StartStep
