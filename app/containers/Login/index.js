import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { makeSelectLogin } from 'selectors/login'
import { loginEmail, loginEmailCode } from '../../actions/login'

import Header from 'components/Header'

class Login extends React.PureComponent {
  state = {
    email: 'tlenclos@jolicode.com',
    code: ''
  }

  render() {
    const { loginEmail, loginEmailCode, waitingForCode } = this.props
    return (
      <div>
        <Layout>
          <Helmet>
            <title>Soutenir ebdo</title>
            <meta name="description" content="Abonnement à ebdo le journal" />
          </Helmet>
          <Row center="xs" start="lg">
            <Col xs={12}>
              <Header />
            </Col>
          </Row>
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
        </Layout>
      </div>
    )
  }
}
Login.propTypes = {
  dispatchLoginEmail: PropTypes.func,
  dispatchLoginEmailCode: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoginEmail: params => dispatch(loginEmailCode(params)),
    dispatch
  }
}

export default connect(state => state.get('login').toJS(), {
  loginEmail,
  loginEmailCode
})(Login)
