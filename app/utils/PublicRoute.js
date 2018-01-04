import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { makeIsLoggedIn } from 'selectors/login'

class PublicRoute extends Component {
  componentDidMount() {}

  render() {
    const { isLoggedIn, component, ...rest } = this.props
    if (isLoggedIn !== null) {
      return (
        <Route
          {...rest}
          render={props =>
            !isLoggedIn ? (
              React.createElement(props, React.createElement(component, props))
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      )
    }
    return null
  }
}

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool
}

PublicRoute.defaultProps = {
  isLoggedIn: false
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeIsLoggedIn()
})

export default connect(mapStateToProps, {})(PublicRoute)
