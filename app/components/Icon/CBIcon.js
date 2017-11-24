import React from 'react'

const CBIcon = props => (
  <svg
    width={props.width || 27}
    height={props.height || 17}
    viewBox="0 0 27 17"
  >
    <g transform="translate(1)" fill="none" fillRule="evenodd">
      <path
        d="M23.006 5.5H1.994"
        stroke="#AFBCC1"
        strokeWidth="4"
        strokeLinecap="square"
      />
      <path
        d="M7.006 12.5H3.959"
        stroke="#D4DADD"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <rect stroke="#AFBCC1" x=".5" y=".5" width="24" height="16" rx="4" />
    </g>
  </svg>
)

export default CBIcon
