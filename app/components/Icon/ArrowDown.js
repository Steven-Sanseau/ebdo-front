import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  width: 21px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`
const ArrowDown = props => (
  <Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={props.width || 11.8}
      height={props.height || 14.5}
      viewBox="0 0 11.8 14.5"
      style={{ width: '100%', height: 'auto' }}
    >
      <path
        fill={`var(${props.color})` || '#1A1919'}
        d="M5.6,0c-0.5,0-1,0.4-1,1v8.4c0,0.6-0.3,0.7-0.7,0.3l-2-2c-0.4-0.4-1-0.4-1.4,0L0.3,8c-0.4,0.4-0.4,1,0,1.4l4.9,4.9c0.4,0.4,1,0.4,1.4,0l4.9-4.9c0.4-0.4,0.4-1,0-1.4l-0.2-0.2c-0.4-0.4-1-0.4-1.4,0l-2,2C7.4,10.1,7.1,10,7.1,9.4V1c0-0.6-0.5-1-1-1L5.6,0z"
      />
    </svg>
  </Wrapper>
)

ArrowDown.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
}

export default ArrowDown
