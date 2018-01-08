/**
 *
 * TextBlock
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import { media } from 'global-styles'

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-bottom: 10px;
`
const TitleBlock = styled.h2`
  font-size: ${props => props.fontSize ? props.fontSize : '22px'};
  margin: 0;
  line-height: 26px;
  color: var(${props => props.color ? props.color : 'inherit'});
  ${media.tablet`
    font-size: 22px;
    line-height: 24px;
  `};
`
const Hr = styled.hr`
  margin: 20px 0;
  width: 50px;
  height: 10px;
  background-color: var(${props => props.color ? props.color : 'inherit'});
  border: none;
  border-radius: 0;
`

const ColPad = styled.div`
  padding: 15px;
`
const TextWrap = styled.p`
  font-size: 18px;
  line-height: 26px;

  ${media.tablet`
    font-size: 16px;
    line-height: 22px;
    margin-top: 20px;
  `};

  span {
    color: var(${props => props.color ? props.color : 'inherit'});
    font-weight: 700;
  }
`
const Wrap = styled.div`
  padding: 10px 0;
  h2 {
    margin: 0;
  }
  p {
    max-width: 450px;
    width: 80%;
    line-height: 24px;
    margin: 0;
    margin-top: 10px;
  }
`
const TextBlock = props => {
  const {
    title, children, type, colorTitle, colorSpan, colorHr, fontSize, className
  } = props

  if (type === 'footer') {
    return (
      <Wrap>
          {title && <Title>{title}</Title>}
          <p>{children}</p>
      </Wrap>
    )
  }
  return (
    <div>
      <ColPad className={className}>
        {title && <TitleBlock fontSize={fontSize} color={colorTitle}>{title}</TitleBlock>}
        {colorHr && <Hr color={colorHr}></Hr>}
        <TextWrap color={colorSpan}>{children}</TextWrap>
      </ColPad>
    </div>
  )
}
TextBlock.propTypes = {
  title: PropTypes.string,
  fontSize: PropTypes.string,
  colorTitle: PropTypes.string,
  colorHr: PropTypes.string,
  colorSpan: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

export default TextBlock
