/**
 *
 * Newsletter
 *
 */

import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import PropTypes from 'prop-types'

import InputText from 'components/InputText'
import Check from 'components/Icon/Check'

import styled from 'styled-components'

const InputWrapper = styled.div`
  margin-top: 20px;
  position: relative;
`
const Newsletter = props => {
  const {
    handleEmail,
    handleFirstname,
    handleKeyPress,
    newsletter,
    type,
    colorCheck,
    handleClick
  } = props

  return (
    <Row>
      <Col xs={12} sm={type === 'block' ? 12 : 4}>
        <InputWrapper>
          <InputText
            label="Prénom"
            placeholder="John"
            color="var(--white-true)"
            value={newsletter.firstname}
            onChange={handleFirstname}
          />
        </InputWrapper>
      </Col>
      <Col
        xs={12}
        sm={type === 'block' ? 12 : 7}
        smOffset={type === 'block' ? 0 : 1}>
        <InputWrapper>
          <InputText
            label="Adresse mail"
            color="var(--white-true)"
            placeholder="contact@mail.fr"
            value={newsletter.email}
            onChange={handleEmail}
            handleKeyPress={handleKeyPress}
          />
          <Check color={colorCheck} handleClick={handleClick} />
        </InputWrapper>
      </Col>
    </Row>
  )
}

Newsletter.propTypes = {
  handleEmail: PropTypes.func,
  handleFirstname: PropTypes.func,
  handleClick: PropTypes.func,
  handleKeyPress: PropTypes.func,
  newsletter: PropTypes.object,
  colorCheck: PropTypes.string,
  type: PropTypes.string
}

export default Newsletter
