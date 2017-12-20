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
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: none;
  display: block;
`
const TitleWithArrow = props => {
  const { text, color } = props
  return (
    <Title to={props.link || '#'}>
      {text}
      <ArrowRight color={color} />
    </Title>
  )
}

TitleWithArrow.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string
}

export default TitleWithArrow
