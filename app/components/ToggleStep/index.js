import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-styled-flexboxgrid'
import anime from 'animejs'

import Button from '../Button'
import WhiteWrapper from '../LayoutStep/WhiteWrapper'
import TextSummary from '../LayoutStep/TextSummary'
import StepPreview from '../LayoutStep/StepPreview'
import StepPostview from '../LayoutStep/StepPostview'
import LoaderNextStep from '../LayoutStep/LoaderNextStep'
import StepPostviewText from '../LayoutStep/StepPostviewText'
import NextStep from '../LayoutStep/NextStep'
import UpdateStep from '../LayoutStep/UpdateStep'
import Title from '../LayoutStep/Title'
import SquareCheckout from '../SquareCheckout'
import './style.css'

class ToggleStep extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnim: false,
      animInstance: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isAnim) {
      this.state.animInstance.finished.then(() => {
        if (this.state.animInstance) {
          this.state.animInstance.restart()
          this.state.animInstance.pause()
        }

        this.setState({ isAnim: false, animInstance: null })
      })
    }
  }

  change = () => {
    this.props.changeStep(this.props.stepNumber)
  }

  animAndNextStep = event => {
    const basicTimeline = anime.timeline({
      autoplay: false
    })
    basicTimeline
      .add({
        targets: this.text,
        duration: 10,
        opacity: '0'
      })
      .add({
        targets: this.button,
        duration: 500,
        height: 20,
        width: 140,
        border: '0',
        borderRadius: 100,
        easing: 'easeOutCubic'
      })
      .add({
        targets: this.progressBar,
        duration: 2000,
        width: 140,
        easing: 'easeOutCubic'
      })
      .add({
        targets: this.button,
        duration: 100
      })

    if (!this.state.isAnim) {
      this.props.nextStep(event)
      basicTimeline.play()
      this.setState({ isAnim: true, animInstance: basicTimeline })
    }
  }

  render() {
    const {
      currentStep,
      stepNumber,
      iconName,
      title,
      contentOpen,
      contentClose,
      isLoadingNextStep,
      textButtonNextStep,
      colorButtonNextStep,
      updateStepHide,
      isError
    } = this.props

    return (
      <div>
        {currentStep === stepNumber && (
          <Row>
            <Col xs={12}>
              <WhiteWrapper>
                <Row>
                  <Col xs={7} xsOffset={3}>
                    <Row>
                      <Col xs={1}>
                        <Row start="xs">
                          <SquareCheckout iconName={iconName} />
                        </Row>
                      </Col>
                      <Col lg={11} md={11} xs={12}>
                        <Title>{title}</Title>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row center="xs">
                  <Col md={11} xs={11} lg={5}>
                    {contentOpen}
                  </Col>
                </Row>
                <Row center="xs">
                  <Col xs={5}>
                    <Row start="xs">
                      <Col xs={12}>
                        <NextStep>
                          <button
                            className="button"
                            onClick={this.animAndNextStep}
                            color={colorButtonNextStep}
                            ref={btn => {
                              this.button = btn
                            }}>
                            <div
                              ref={txt => {
                                this.text = txt
                              }}>
                              {isError && 'Valider a nouveau'}
                              {(!isError && textButtonNextStep) ||
                                'Étape Suivante'}
                            </div>
                            <div
                              className="progress-bar"
                              ref={pgrs => {
                                this.progressBar = pgrs
                              }}
                            />
                          </button>
                        </NextStep>
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
              <Col xs={12} lg={8} lgOffset={2}>
                <Row>
                  <Col xs={2}>
                    <Row end="xs">
                      <SquareCheckout iconName={iconName} silver />
                    </Row>
                  </Col>
                  <Col xs={7}>
                    <Title color="silver">{title}</Title>
                  </Col>
                </Row>
              </Col>
            </Row>
          </StepPreview>
        )}
        {currentStep > stepNumber && (
          <StepPostview>
            <Row>
              <Col lg={8} lgOffset={2} xs={12}>
                <Row>
                  <Col lg={1} xs={1} lgOffset={1}>
                    <Row end="xs">
                      <SquareCheckout checked />
                    </Row>
                  </Col>
                  <Col lg={6} xs={10}>
                    <StepPostviewText>
                      <TextSummary>
                        {contentClose}
                        {!updateStepHide && (
                          <UpdateStep>
                            <Button onClick={this.change}>Modifier</Button>
                          </UpdateStep>
                        )}
                      </TextSummary>
                    </StepPostviewText>
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
  isLoadingNextStep: PropTypes.bool,
  isError: PropTypes.bool,
  iconName: PropTypes.string,
  title: PropTypes.string,
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func,
  textButtonNextStep: PropTypes.string,
  colorButtonNextStep: PropTypes.string,
  updateStepHide: PropTypes.bool
}

export default ToggleStep
