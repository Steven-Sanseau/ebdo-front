import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import Button from '../Button'
import WhiteWrapper from '../LayoutStep/WhiteWrapper'
import SquareCheckout from '../SquareCheckout'
import Title from '../TitleStep/Title'

class EmailStep extends React.Component {
  constructor(props) {
    super(props)
    this.change = this.change.bind(this)
  }

  change() {
    this.props.changeStep(this.props.stepNumber)
  }

  render() {
    const { isOpen, nextStep, stepNumber } = this.props

    return (
      <div>
        {isOpen && (
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
                        <Title>Je renseigne mon email</Title>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row center="xs">
                  <Col xs={5}>ze</Col>
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
        {!isOpen && (
          <Row>
            <Col xs={8} xsOffset={2}>
              <Row>
                <Col xs={2}>
                  <Row end="xs">
                    <SquareCheckout checked />
                  </Row>
                </Col>
                <Col xs={5}>
                  <Button onClick={this.change}>Modifier</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </div>
    )
  }
}

EmailStep.propTypes = {
  stepNumber: PropTypes.number,
  isOpen: PropTypes.bool,
  changeStep: PropTypes.func,
  nextStep: PropTypes.func
}

export default EmailStep
