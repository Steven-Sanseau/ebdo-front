import React from 'react'
import PropTypes from 'prop-types'

import Waypoint from 'react-waypoint'
import Progress from 'components/Progress'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectClientCount } from 'selectors/client'
import { getClientsCount } from 'actions/client'

export class ProgressContainer extends React.Component {
  state = {
    rate: 0.0,
    number: 0,
    initialAnimate: false
  }

  componentDidMount() {
    this.props.dispatch(getClientsCount())
  }

  _handleWaypointEnter = event => {
    this.setState({
      initialAnimate: true,
      number: this.props.clientCount,
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

ProgressContainer.propTypes = {
  clientCount: PropTypes.number,
  dispatch: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  clientCount: makeSelectClientCount()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressContainer)
