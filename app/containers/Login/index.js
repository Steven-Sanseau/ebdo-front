import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'url-search-params-polyfill'

import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  makeSelectLogin,
  makeSelectWaitingForCode,
  makeIsLoadingLogin
} from 'selectors/login'
import { loginEmail, loginEmailCode } from 'actions/login'

import LoginPage from 'components/LoginPage'

const theme = {
  flexboxgrid: {
    // Defaults
    gutterWidth: 0, // rem
    outerMargin: 0 // rem
  }
}
const TextLogin = styled.div`
  font-size: 18px;
  font-family: 'FG-R';
`
export class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    email: '',
    code: '',
    redirect: '/'
  }

  handleSubmit = event => {
    event.preventDefault()
    const { waitingForCode, location } = this.props

    if (waitingForCode && this.state.code !== '') {
      const redirect = new URLSearchParams(location.search).get('redirect')
      this.props.dispatchLoginEmailCode(
        this.state.email,
        this.state.code,
        redirect
      )
    } else {
      this.props.dispatchLoginEmail(this.state.email)
    }
  }

  handleEmail = event => {
    this.setState({ email: event.target.value })
  }

  handleCode = event => {
    this.setState({ code: event.target.value })
  }
  handleRoute = event => {
    this.handleSubmit(event)
  }

  render() {
    const { isLoadingLogin, dispatch } = this.props

    return (
      <div>
        <Helmet>
          <title>Connexion à mon espace abonné ebdo</title>
          <meta name="description" content="Espace abonné à ebdo le journal" />
        </Helmet>

        <ThemeProvider theme={theme}>
          <LoginPage
            {...this.props}
            handleSubmit={this.handleSubmit}
            handleEmail={this.handleEmail}
            handleCode={this.handleCode}
            handleRoute={this.handleRoute}
            code={this.state.code}
            email={this.state.email}
            isLoadingLogin={isLoadingLogin}
            dispatch={dispatch}
          />
        </ThemeProvider>
      </div>
    )
  }
}
Login.propTypes = {
  dispatchLoginEmail: PropTypes.func,
  dispatchLoginEmailCode: PropTypes.func,
  waitingForCode: PropTypes.bool,
  isLoadingLogin: PropTypes.bool,
  dispatch: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  waitingForCode: makeSelectWaitingForCode(),
  isLoadingLogin: makeIsLoadingLogin()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoginEmail: email => dispatch(loginEmail(email)),
    dispatchLoginEmailCode: (email, code, redirect) =>
      dispatch(loginEmailCode(email, code, false, redirect)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
