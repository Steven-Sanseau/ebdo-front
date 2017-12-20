import React from 'react'
import { Line } from 'react-progress-bar.js'
import PropTypes from 'prop-types'

// import styled from 'styled-components';

const Progress = props => {
  const { rate, number } = props
  const options = {
    strokeWidth: 2,
    color: 'var(--squash)',
    trailColor: '#F5F5F5',
    svgStyle: {
      strokeLineCap: 'round'
    },
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
        left: `calc(${rate * 100}% - 75px)`
      }
    }
  }
  const textNumber = `${number} abonnés`

  return (
    <Line
      options={options}
      progress={rate}
      text={textNumber}
      className="progress-line"
    />
  )
}

Progress.propTypes = {
  rate: PropTypes.number,
  number: PropTypes.number
}

export default Progress
