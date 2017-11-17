import React from 'react'
import PropTypes from 'prop-types'

import NumberIcon from './NumberIcon'
import Icon from './Icon'
import Square from './Square'

class SquareCheckout extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { checked, number, silver } = this.props
    return (
      <div>
        <Square color={checked ? 'green' : silver ? 'silver' : 'black'}>
          {checked && <Icon>✓</Icon>}
          {number &&
            !checked && (
              <NumberIcon color={silver ? 'silver' : 'black'}>
                {number}
              </NumberIcon>
            )}
        </Square>
      </div>
    )
  }
}

SquareCheckout.propTypes = {
  checked: PropTypes.bool,
  silver: PropTypes.bool,
  number: PropTypes.number
}

SquareCheckout.defaultProps = {
  checked: false,
  silver: false,
  number: 1
}

export default SquareCheckout
