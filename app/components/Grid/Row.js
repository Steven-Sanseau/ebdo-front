import React from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'
import 'components/Grid/Row.css'

function Row(props) {
  return (
    <div className={props.w ? `columned ${props.m ? 'mobile-columned' : ''}` : `${props.m ? 'mobile-columned' : ''}`}>
      {props.children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  w: PropTypes.bool,
  m: PropTypes.bool,
}

export default Row
