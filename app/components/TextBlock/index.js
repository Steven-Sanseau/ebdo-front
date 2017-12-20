/**
 *
 * TextBlock
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-bottom: 10px;
`
const TitleBlock = styled.h2`
  font-size: ${props => props.fontSize ? props.fontSize : '22px'};  
  margin: 0;
  margin-bottom: 20px;
  line-height: 26px;
  color: var(${props => props.color ? props.color : 'inherit'});
`
const Hr = styled.hr`
  margin: 20px 0;
  width: 50px;
  height: 10px;
  background-color: var(${props => props.color ? props.color : 'inherit'});
  border: none;
  border-radius: 0;  
`

const ColPad = styled(Col)`
  padding: 15px 25px;
`
const TextWrap = styled.p`
  font-size: 18px;
  line-height: 26px;

  span {
    color: var(${props => props.color ? props.color : 'inherit'});
    font-weight: 700;
  }
`
const TextBlock = props => {
  const {
    title, children, type, colorTitle, colorSpan, colorHr, fontSize
  } = props

  if (type === 'footer') {
    return (
      <div>
        <Col xs={12} md={8}>
          {title && <Title>{title}</Title>}
          <div>{children}</div>
        </Col>
      </div>
    )
  }
  return (
    <div>
      <ColPad>
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
  children: PropTypes.node
}

export default TextBlock
