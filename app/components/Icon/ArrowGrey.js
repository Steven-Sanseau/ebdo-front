import React from 'react'

const ArrowGrey = props => (
  <svg
    width={props.width || 30}
    height={props.height || 24}
    viewBox="0 0 30 24"
  >
    <defs>
      <path
        d="M30 12.508c0 1.121-.928 2.04-2.062 2.04H10.583c-1.134 0-1.406.648-.604 1.44l4.112 4.06c.803.792.8 2.087-.004 2.879l-.489.48c-.804.792-2.12.79-2.922-.003L.602 13.45a2.028 2.028 0 0 1 0-2.884L10.678.596a2.089 2.089 0 0 1 2.918-.004l.493.488c.805.793.805 2.09.002 2.881L9.91 8.1c-.802.793-.53 1.442.604 1.442h17.425c1.134 0 2.062.917 2.062 2.039v.928z"
        id="a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g mask="url(#b)" fill="#E8EEF1">
        <path d="M0 0h30v24H0z" />
      </g>
    </g>
  </svg>
)

export default ArrowGrey
