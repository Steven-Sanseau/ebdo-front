import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import 'components/Grid/Col.css'
import { media } from 'global-styles'

const Wrap = styled.div`
  ${props => (props.mc ? '@media (max-width: 768px){margin-left: auto; margin-right: auto;}' : '')}
`

function Col(props) {
  return (
    <Wrap {...props} className={props.w ? `${props.className || ''} w-${props.w} ${props.m ? `w-m-${props.m}` : ''}` : `${props.m ? `${props.className || ''} w-m-${props.m}` : ''}`}>
      {props.children}
    </Wrap>
  )
}

Col.propTypes = {
  children: PropTypes.node,
  w: PropTypes.number,
  m: PropTypes.number,
}

export default Col
