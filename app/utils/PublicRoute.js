import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { isLoggedIn } from 'modules/auth/AuthActions'

class PublicRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    layout: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.func
  }

  static defaultProps = {
    isAuthenticated: false,
    isLoggedIn: () => {}
  }

  constructor(props) {
    super(props)
    if (!props.isAuthenticated) {
      setTimeout(() => {
        props.isLoggedIn()
      }, 5)
    }
  }

  render() {
    const { isAuthenticated, component, layout, ...rest } = this.props
    if (isAuthenticated !== null) {
      return (
        <Route
          {...rest}
          render={props =>
            !isAuthenticated
              ? React.createElement(
                  layout,
                  props,
                  React.createElement(component, props)
                )
              : <Redirect
                to={{
                  pathname: '/projects',
                  state: { from: props.location }
                }}
              />}
        />
      )
    }
    return null
  }
}

const mapDispatchToProps = {
  isLoggedIn
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute)
