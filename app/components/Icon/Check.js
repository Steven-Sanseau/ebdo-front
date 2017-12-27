import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  position: absolute;
  bottom: 8px;
  right: 6px;
  width: 28px;
  height: 28px;
  cursor: pointer;
`
const Check = props => (
  <Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={props.width || 15.8}
      height={props.height || 15.8}
      viewBox="0 0 15.8 15.8"
      onClick={props.handleClick}
      style={{ width: '100%', height: 'auto' }}
    >
      <path
        fill={`var(${props.color})` || '#1A1919'}
        d="M15.8,6.3v3.2c0,3.5-2.8,6.3-6.3,6.3H6.3C2.8,15.8,0,13,0,9.5V6.3C0,2.8,2.8,0,6.3,0h3.2C13,0,15.8,2.8,15.8,6.3z"
      />
      <path
        fill="#FFF"
        d="M6.3,11.2c-0.1-0.2-0.2-0.4-0.2-0.4l-0.3-0.6C5.8,10,5.7,9.8,5.6,9.7L5.5,9.4C5.2,8.8,4.8,8.3,4.4,8.1c0.5-0.4,0.9-0.6,1.3-0.6c0.3,0,0.5,0.1,0.6,0.3c0.1,0.2,0.3,0.5,0.4,1c0.8-1.4,1.3-2.4,1.8-3c0.4-0.5,0.7-0.8,1-1c0.3-0.2,0.6-0.2,1.1-0.2c0.3,0,0.6,0.1,0.9,0.2c-0.8,0.5-1.6,1.3-2.5,2.5C8,8.4,7.2,9.7,6.3,11.2z"
      />
    </svg>
  </Wrapper>
)

Check.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  handleClick: PropTypes.func,
  color: PropTypes.string
}

export default Check
