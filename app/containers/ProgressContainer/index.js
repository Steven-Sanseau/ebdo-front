import React from 'react'
import Waypoint from 'react-waypoint'
import Progress from 'components/Progress'

export class ProgressContainer extends React.Component {
  state = {
    rate: 0.0,
    number: 0,
    initialAnimate: false
  }

  _handleWaypointEnter = event => {
    this.setState({
      initialAnimate: true,
      number: 6349,
      rate: 0.4
    })
  }

  render() {
    const { rate, number, initialAnimate } = this.state
    return (
      <Waypoint onEnter={this._handleWaypointEnter}>
        <div>
          <Progress
            rate={rate}
            initialAnimate={initialAnimate}
            number={number}
          />
        </div>
      </Waypoint>
    )
  }
}

ProgressContainer.propTypes = {}

export default ProgressContainer
