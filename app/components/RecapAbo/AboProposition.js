/**
 *
 * AboProposition
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from 'global-styles'

import Button from 'components/Button'

const AboPropositionWrapper = styled.div`
  max-width: 220px;
`
const ButtonWrapper = styled.div``
const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 26px;
  margin: 0;
`

const TextWrapper = styled.div`
  margin-top: 10px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 170px;

  ${media.tablet`
    margin-bottom: 45px;
  `};
`

const AboProposition = props => {
  const {
    to, buttonText, children, buttonColor, title
  } = props
  const handleRoute = () => {
    console.log(to)
  }
  return (
    <Wrapper>
      <AboPropositionWrapper>
        <Title>{title}</Title>
        <TextWrapper>{children}</TextWrapper>
      </AboPropositionWrapper>
      <ButtonWrapper>
        <Button handleRoute={handleRoute} color={buttonColor}>
          {buttonText}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

AboProposition.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string
}

export default AboProposition
