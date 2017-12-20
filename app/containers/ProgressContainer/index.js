import React from 'react'
// import PropTypes from 'prop-types'

import Progress from 'components/Progress'

export class ProgressContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    rate: 0.44,
    number: 6349
  }
  render() {
    const { rate, number } = this.state
    return <Progress rate={rate} number={number} />
  }
}

ProgressContainer.propTypes = {}

export default ProgressContainer
