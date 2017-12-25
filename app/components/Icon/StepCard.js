import React from 'react'

const StepCard = props => (
  <svg
    width={props.width || 30}
    height={props.height || 30}
    viewBox="0 0 30 30"
  >
    <g fill={props.color === 'silver' ? '#d4dadd' : '#000'} fillRule="evenodd">
      <path d="M17.794 24.683H11.85c-3.78 0-6.85-3.072-6.85-6.89v-3.927h19.683v3.928c0 3.817-3.109 6.889-6.889 6.889M11.85 4.958h5.944c2.38 0 4.489 1.235 5.728 3.1H6.15c1.228-1.865 3.322-3.1 5.701-3.1M17.794 0H11.85C5.314 0 0 5.314 0 11.888v5.906C0 24.328 5.314 29.68 11.85 29.68h5.944c6.534 0 11.85-5.353 11.85-11.887v-5.906C29.644 5.314 24.328 0 17.794 0" />
      <path d="M9.03 20.591h4.51v-1.509H9.03zM9.03 17.96h8.051v-1.51H9.03z" />
    </g>
  </svg>
)

export default StepCard
