import React from 'react'

const Card = props => (
  <svg
    width={props.width || 50}
    height={props.height || 34}
    viewBox="0 0 50 34">
    <g stroke="#E52D28" fill="none" fill-rule="evenodd">
      <path d="M46.748 11H4.753" stroke-width="6" stroke-linecap="square" />
      <path
        d="M14.012 24H7.917"
        stroke-width="4"
        opacity=".5"
        stroke-linecap="square"
      />
      <rect stroke-width="2" x="1" y="1" width="48" height="32" rx="4" />
    </g>
  </svg>
)

export default Card
