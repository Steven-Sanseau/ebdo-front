import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import { Row, Col } from 'react-flexbox-grid'

import ToggleStep from '../ToggleStep/Loadable'

import InputCheckbox from 'components/InputCheckbox'

class StartStep extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startNow: true,
      startDate: null
    }
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleCheckbox() {
    this.setState({ startNow: !this.state.startNow })
  }

  contentOpen() {
    const { startNow, startDate } = this.state
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
            <Col xs={12}>Input</Col>
          </Row>
        )}
      </div>
    )
  }

  contentClose() {
    return (
      <div>
        Mon abonnement débutera avec la reception de mon premier numéro le
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
