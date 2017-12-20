import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  width: 21px;
  margin-left: 15px;
  display: inline-block;
`
const ArrowRight = props => (
  <Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={props.width || 14.5}
      height={props.height || 11.8}
      viewBox="0 0 14.5 11.8"
      style={{ width: '100%', height: 'auto' }}
    >
      <path
        fill={`var(${props.color})` || '#1A1919'}
        d="M0,6.1c0,0.6,0.4,1,1,1h8.4c0.6,0,0.7,0.3,0.3,0.7l-2,2c-0.4,0.4-0.4,1,0,1.4L8,11.5c0.4,0.4,1,0.4,1.4,0l4.9-4.9 c0.4-0.4,0.4-1,0-1.4L9.4,0.3C9-0.1,8.3-0.1,8,0.3L7.7,0.5c-0.4,0.4-0.4,1,0,1.4l2,2c0.4,0.4,0.3,0.7-0.3,0.7H1c-0.6,0-1,0.5-1,1 L0,6.1z"
      />
    </svg>
  </Wrapper>
)

ArrowRight.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
}

export default ArrowRight
