import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import ColCustom from 'components/Grid/Col'

import anime from 'animejs'

import Button from '../Button'
import WhiteWrapper from '../LayoutStep/WhiteWrapper'
import TextSummary from '../LayoutStep/TextSummary'
import StepPreview from '../LayoutStep/StepPreview'
import StepPostview from '../LayoutStep/StepPostview'
// import LoaderNextStep from '../LayoutStep/LoaderNextStep'
import StepPostviewText from '../LayoutStep/StepPostviewText'
import NextStep from '../LayoutStep/NextStep'
import UpdateStep from '../LayoutStep/UpdateStep'
import Title from '../LayoutStep/Title'
import SquareCheckout from '../SquareCheckout'

import './style.css'
const CurrentStep = styled.div``
const ContentOpen = styled.div``

const Layout = styled(Grid)`
  position: relative;
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

class ToggleStep extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnim: false,
      animInstance: null
    }
  }

  componentDidUpdate() {
    if (this.state.isAnim) {
      this.state.animInstance.finished.then(() => {
        if (this.state.animInstance) {
          this.state.animInstance.restart()
          this.state.animInstance.pause()
          if (this.props.handleAnimationEnding) {
            this.props.handleAnimationEnding()
          }
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
        duration: 50,
        opacity: '0'
      })
      .add({
        targets: this.button,
        duration: 450,
        height: 30,
        width: 140,
        backgroundColor: '#fafafa',
        border: '0',
        borderRadius: 100,
        easing: 'easeOutCubic'
      })
      .add({
        targets: this.progressBar,
        duration: 1100,
        width: 140,
        easing: 'easeOutCubic'
      })

    if (this.props.isLongAnim) {
      basicTimeline
        .add({
          targets: this.progressBar,
          duration: 1100,
          left: 140,
          width: 0,
          easing: 'easeOutCubic'
        })
        .add({
          targets: this.progressBar,
          duration: 0,
          left: 0,
          width: 0
        })
        .add({
          targets: this.progressBar,
          duration: 1100,
          width: 140,
          easing: 'easeOutCubic'
        })
        .add({
          targets: this.progressBar,
          duration: 1100,
          left: 140,
          width: 0,
          easing: 'easeOutCubic'
        })
        .add({
          targets: this.button,
          duration: 100
        })
    }

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
      secondaryButton,
      isError,
      hideIconChecked,
      hideNextStep,
      hideOffsetClose
    } = this.props

    return (
      <div>
        {currentStep === stepNumber && (
          <CurrentStep>
            <WhiteWrapper>
              <Layout fluid>
                <Row>
                  <ColCustom w={5} w-m={0} />
                  <ColCustom w={15}>
                    <Row>
                      <ColCustom w={1} w-m={2}>
                        <SquareCheckout iconName={iconName} />
                      </ColCustom>
                      <ColCustom w={21} mc>
                        <Title>{title}</Title>
                        <ContentOpen>{contentOpen}</ContentOpen>
                        <NextStep>
                          {!hideNextStep && (
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
                          )}
                        </NextStep>
                      </ColCustom>
                    </Row>
                  </ColCustom>
                </Row>
              </Layout>
            </WhiteWrapper>
          </CurrentStep>
        )}
        {currentStep < stepNumber && (
          <Layout fluid>
            <StepPreview>
              <Row>
                <ColCustom w={5} w-m={0} />
                <ColCustom w={15}>
                  <Row>
                    <ColCustom w={1} w-m={2}>
                      <SquareCheckout iconName={iconName} silver />
                    </ColCustom>
                    <ColCustom w={15}>
                      <Title color="silver">{title}</Title>
                    </ColCustom>
                  </Row>
                </ColCustom>
              </Row>
            </StepPreview>
          </Layout>
        )}
        {currentStep > stepNumber && (
          <Layout fluid>
            <StepPostview>
              <Row>
                <ColCustom w={!hideOffsetClose ? 5 : 1} w-m={0} />
                <ColCustom w={!hideOffsetClose ? 15 : 21}>
                  <Row>
                    {!hideIconChecked && (
                      <ColCustom w={1} w-m={2}>
                        <SquareCheckout checked />
                      </ColCustom>
                    )}
                    <ColCustom w={21} mc>
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
                    </ColCustom>
                  </Row>
                </ColCustom>
              </Row>
            </StepPostview>
          </Layout>
        )}
      </div>
    )
  }
}

ToggleStep.propTypes = {
  contentOpen: PropTypes.object,
  contentClose: PropTypes.object,
  secondaryButton: PropTypes.func,
  isLoadingNextStep: PropTypes.bool,
  isError: PropTypes.bool,
  hideIconChecked: PropTypes.bool,
  hideNextStep: PropTypes.bool,
  hideOffsetClose: PropTypes.bool,
  iconName: PropTypes.string,
  title: PropTypes.string,
  stepNumber: PropTypes.number,
  currentStep: PropTypes.number,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func,
  textButtonNextStep: PropTypes.string,
  colorButtonNextStep: PropTypes.string,
  updateStepHide: PropTypes.bool,
  handleAnimationEnding: PropTypes.func,
  isLongAnim: PropTypes.bool
}

ToggleStep.defaultProps = {
  hideNextStep: false,
  hideOffsetClose: false,
  isLongAnim: false
}

export default ToggleStep
