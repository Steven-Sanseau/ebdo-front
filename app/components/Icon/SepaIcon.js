import React from 'react'

const SepaIcon = props => (
  <svg
    width={props.width || 17}
    height={props.height || 19}
    viewBox="0 0 17 19"
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M14.5 8.5v7.071M11.5 8.5v7.071M8.5 8.5v7.071M5.5 8.5v7.071M2.5 8.5v7.071"
        stroke="#AFBCC1"
        strokeLinecap="square"
      />
      <path fill="#D4DADD" d="M0 5h17v2H0z" />
      <path fill="#AFBCC1" d="M8.5 0L17 5H0z" />
      <path fill="#D4DADD" d="M0 17h17v2H0z" />
    </g>
  </svg>
)

export default SepaIcon
