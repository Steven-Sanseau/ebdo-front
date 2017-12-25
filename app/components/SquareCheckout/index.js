import React from 'react'
import PropTypes from 'prop-types'

import StepAddress from 'components/Icon/StepAddress'
import StepCard from 'components/Icon/StepCard'
import StepMail from 'components/Icon/StepMail'
import StepMonnaie from 'components/Icon/StepMonnaie'
import StepSave from 'components/Icon/StepSave'

import NumberIcon from './NumberIcon'
import Icon from './Icon'
import Square from './Square'

function SquareCheckout(props) {
  const { checked, number, silver, iconName } = props

  let color = 'black'
  if (checked) {
    color = 'green'
  } else if (iconName === 'check') {
    color = 'silver'
  } else {
    color = 'white'
  }

  return (
    <div>
      <Square color={color}>
        {iconName === 'save' && (
          <StepSave color={silver ? 'silver' : 'black'} />
        )}
        {iconName === 'mail' && (
          <StepMail color={silver ? 'silver' : 'black'} />
        )}
        {iconName === 'monnaie' && (
          <StepMonnaie color={silver ? 'silver' : 'black'} />
        )}
        {iconName === 'card' && (
          <StepCard color={silver ? 'silver' : 'black'} />
        )}
        {iconName === 'address' && (
          <StepAddress color={silver ? 'silver' : 'black'} />
        )}
        {iconName === 'check' && (
          <Icon color={silver ? 'silver' : 'black'}>✓</Icon>
        )}
        {checked && <Icon color="--booger">✓</Icon>}
      </Square>
    </div>
  )
}

SquareCheckout.propTypes = {
  checked: PropTypes.bool,
  iconName: PropTypes.string,
  silver: PropTypes.bool,
  number: PropTypes.number
}

SquareCheckout.defaultProps = {
  checked: false,
  silver: false,
  iconName: null,
  number: 1
}

export default SquareCheckout
