/**
 *
 * TitleWithArrow
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ArrowRight from 'components/Icon/ArrowRight'
import { Link as LinkRouter } from 'react-router-dom'

const Title = styled(LinkRouter)`
  font-size: 18px;
  color: var(${props => props.textColor});
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: none;
  display: block;
`
const TitleWithArrow = props => {
  const { text, color, textColor } = props
  return (
    <Title textColor={textColor || '--white-true'} to={props.link || '#'}>
      {text}
      <ArrowRight color={color} />
    </Title>
  )
}

TitleWithArrow.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string
}

TitleWithArrow.defaultProps = { textColor: '--white-true' }

export default TitleWithArrow
