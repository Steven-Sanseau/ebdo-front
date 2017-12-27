import React from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'


function Col(props) {
  return (
    <div className={props.w ? `w-${props.w} ${props.m ? `w-m-${props.m}` : ''}` : `${props.m ? `w-m-${props.m}` : ''}`}>
      {props.children}
    </div>
  )
}

Col.propTypes = {
  children: PropTypes.node,
  w: PropTypes.number,
  m: PropTypes.number,
}

export default Col