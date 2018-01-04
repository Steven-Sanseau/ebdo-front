import React from 'react'
import { Line } from 'react-progress-bar.js'
import PropTypes from 'prop-types'
import 'components/Progress/Progress.css'
// import styled from 'styled-components';

const Progress = props => {
  const { rate, number, initialAnimate } = props
  const options = {
    strokeWidth: 2,
    color: 'var(--squash)',
    trailColor: '#F5F5F5',
    svgStyle: {
      strokeLineCap: 'round'
    },
    easing: 'easeInOut',
    duration: 1400,
    text: {
      style: {
        border: '2px solid var(--squash)',
        borderRadius: '17px',
        fontSize: '18px',
        fontWeight: '700',
        position: 'absolute',
        top: '-60px',
        padding: '7px 10px',
        height: '40px',
        transition: `left 1400ms ease-in-out`,
        left: `calc(${rate * 100}% - 75px)`
      }
    }
  }
  const textNumber = `${number} abonnés`

  return (
    <div>
      <Line
        options={options}
        progress={rate}
        initialAnimate={initialAnimate}
        text={textNumber}
        className="progress-line"
      />
    </div>
  )
}

Progress.propTypes = {
  rate: PropTypes.number,
  initialAnimate: PropTypes.bool,
  number: PropTypes.number
}

export default Progress
