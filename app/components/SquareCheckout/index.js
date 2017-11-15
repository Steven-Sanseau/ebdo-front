import React from 'react';
import PropTypes from 'prop-types';

import NumberIcon from './NumberIcon';
import Icon from './Icon';
import Square from './Square';

class SquareCheckout extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { checked, number } = this.props;
    return (
      <div>
        <Square type={checked ? 'green' : 'black'}>
          {checked && <Icon>✓</Icon>}
          {number && !checked && <NumberIcon>{number}</NumberIcon>}
        </Square>
      </div>
    );
  }
}

SquareCheckout.propTypes = {
  checked: PropTypes.bool,
  number: PropTypes.number
};

SquareCheckout.defaultProps = {
  checked: false,
  number: 1
};

export default SquareCheckout;
