import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import Button from '../Button'
import WhiteWrapper from '../LayoutStep/WhiteWrapper'
import TextSummary from '../LayoutStep/TextSummary'
import StepPreview from '../LayoutStep/StepPreview'
import StepPostview from '../LayoutStep/StepPostview'
import Title from '../LayoutStep/Title'
import HR from '../LayoutStep/HR'
import SquareCheckout from '../SquareCheckout'

class ToggleStep extends React.Component {
  constructor(props) {
    super(props)
    this.change = this.change.bind(this)
  }

  change() {
    this.props.changeStep(this.props.stepNumber)
  }

  render() {
    const {
      currentStep,
      nextStep,
      stepNumber,
      title,
      contentOpen,
      contentClose
    } = this.props

    return (
      <div>
        {currentStep === stepNumber && (
          <Row>
            <Col xs={12}>
              <WhiteWrapper>
                <Row>
                  <Col xs={8} xsOffset={2}>
                    <Row>
                      <Col xs={2}>
                        <Row end="xs">
                          <SquareCheckout number={stepNumber} />
                        </Row>
                      </Col>
                      <Col xs={5}>
                        <Title>{title}</Title>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row center="xs">
                  <Col xs={5}>{contentOpen}</Col>
                </Row>
                <Row center="xs">
                  <Col xs={5}>
                    <Row start="xs">
                      <Col xs={12}>
                        <Button handleRoute={nextStep}>Étape Suivante</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </WhiteWrapper>
            </Col>
          </Row>
        )}
        {currentStep < stepNumber && (
          <StepPreview>
            <Row>
              <Col xs={8} xsOffset={2}>
                <Row>
                  <Col xs={2}>
                    <Row end="xs">
                      <SquareCheckout number={stepNumber} silver />
                    </Row>
                  </Col>
                  <Col xs={7}>
                    <Title color="silver">{title}</Title>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row center="xs">
              <Col xs={7}>
                <HR />
              </Col>
            </Row>
          </StepPreview>
        )}
        {currentStep > stepNumber && (
          <StepPostview>
            <Row>
              <Col xs={8} xsOffset={2}>
                <Row>
                  <Col xs={2}>
                    <Row end="xs">
                      <SquareCheckout checked />
                    </Row>
                  </Col>
                  <Col xs={5}>
                    <TextSummary>{contentClose}</TextSummary>
                    <Button onClick={this.change}>Modifier</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </StepPostview>
        )}
      </div>
    )
  }
}

ToggleStep.propTypes = {
  contentOpen: PropTypes.object,
  contentClose: PropTypes.object,
  title: PropTypes.string,
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}

export default ToggleStep
