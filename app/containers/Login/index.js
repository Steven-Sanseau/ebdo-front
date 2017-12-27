import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { loginEmail, loginEmailCode } from '../../actions/login'

class Login extends React.PureComponent {
  state = {
    email: 'tlenclos@jolicode.com',
    code: ''
  }

  render() {
    const { loginEmail, loginEmailCode, waitingForCode } = this.props
    return (
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <h1>Login</h1>

        <form
          onSubmit={event => {
            // TODO Use state in React
            event.preventDefault()

            if (waitingForCode && this.state.code !== '') {
              loginEmailCode(this.state.email, this.state.code)
            } else {
              loginEmail(this.state.email)
            }
          }}
        >
          {!waitingForCode && (
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={event => {
                this.setState({ email: event.target.value })
              }}
            />
          )}
          {waitingForCode && (
            <div>
              <p>Veuillez rentrer le code pour valider la connexion</p>
              <input
                name="code"
                type="number"
                value={this.state.code}
                onChange={event => {
                  this.setState({ code: event.target.value })
                }}
              />
            </div>
          )}
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  loginEmail: PropTypes.func,
  loginEmailCode: PropTypes.string
}

const mapStateToProps = ''

function mapDispatchToProps(dispatch) {
  return {
    loginEmailCode: () => dispatch()
  }
}

const withConnect = connect(state => state.get('login').toJS(), {
  loginEmail,
  loginEmailCode
})

export default compose(withConnect)(Login)
