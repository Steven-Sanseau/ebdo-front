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
  color: var(${props => props.color});
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: none;
  display: block;
`
const TitleOutside = styled.a`
  font-size: 18px;
  color: var(${props => props.color});
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: none;
  display: block;
`
const TitleWithArrow = props => {
  const { text, color, textColor, linkOutside, link } = props
  return (
    <span>
      {linkOutside && (
        <TitleOutside
          color={textColor || '--white-true'}
          rel="noopener"
          target="_blank"
          href={props.linkOutside}>
          {text}
          <ArrowRight color={color} />
        </TitleOutside>
      )}
      {link && (
        <Title color={textColor || '--white-true'} to={props.link || '#'}>
          {text}
          <ArrowRight color={color} />
        </Title>
      )}
    </span>
  )
}

TitleWithArrow.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  link: PropTypes.string,
  linkOutside: PropTypes.string,
  color: PropTypes.string
}

TitleWithArrow.defaultProps = { textColor: '--white-true' }

export default TitleWithArrow
