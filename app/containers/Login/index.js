import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'

import injectSaga from '../../utils/injectSaga'
import sagaLogin from '../../saga/login'
import { loginEmail, loginEmailCode } from '../../actions/login'

class Login extends React.PureComponent {
  state = {
    email: "tlenclos@jolicode.com",
    code: ""
  }

  render() {
    const { loginEmail, loginEmailCode, waitingForCode } = this.props;
    return (
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <h1>Login</h1>

        <form onSubmit={(event) => {
          // TODO Use state in React
          event.preventDefault();

          if (waitingForCode && this.state.code !== "") {
            loginEmailCode(this.state.email, this.state.code)
          } else {
            loginEmail(this.state.email)
          }
        }}>
          {!waitingForCode && <input name="email" type="email" value={this.state.email} onChange={(event) => {
            this.setState({ email: event.target.value })
          }} />}
          {waitingForCode &&
          <div>
            <p>Veuillez rentrer le code pour valider la connexion</p>
            <input name="code" type="number" value={this.state.code} onChange={(event) => {
              this.setState({ code: event.target.value })
            }} />
          </div>
          }
        </form>

      </div>
    )
  }
}

const withConnect = connect((state) => state.get('login').toJS(), { loginEmail, loginEmailCode });
const withLoginSaga = injectSaga({ key: 'saga', saga: sagaLogin })

export default compose(
  withConnect,
  withLoginSaga,
)(Login)
