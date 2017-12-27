import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

import Helmet from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectLogin } from 'selectors/login'
import { loginEmail, loginEmailCode } from '../../actions/login'

import Header from 'components/Header'
import Layout from 'containers/Checkout/Layout'
import { ThemeProvider } from 'styled-components'
import TitleWithArrow from 'components/TitleWithArrow'

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
  state = {
    email: '',
    code: ''
  }

  handleSubmit = event => {
    event.preventDefault()

    if (waitingForCode && this.state.code !== '') {
      this.props.dispatchLoginEmailCode(this.state.email, this.state.code)
    } else {
      this.props.dispatchLoginEmail(this.state.email)
    }
  }

  render() {
    const { loginEmail, loginEmailCode, waitingForCode } = this.props
    return (
      <div>
        <Helmet>
          <title>Soutenir ebdo</title>
          <meta name="description" content="Abonnement à ebdo le journal" />
        </Helmet>

        <ThemeProvider theme={theme}>
          <Layout>
            <Row center="xs" start="lg">
              <Col xs={12}>
                <Header />
              </Col>
            </Row>
            <Row>
              <Col lg={6} xs={12}>
                <form onSubmit={this.handleSubmit}>
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
              </Col>
              <Col lg={6} xs={12}>
                <TextLogin>
                  Un espace dédié vous permettra bientôt d’éditer toutes vos
                  informations. D’ici là, contactez-nous pour tout changement :
                </TextLogin>
                <TitleWithArrow
                  text="F.A.Q"
                  link="/faq"
                  color="--squash"
                  textColor="--black"
                />
                <TextLogin>
                  La réponse à votre question s’y trouve peut-être !
                </TextLogin>
                <TitleWithArrow
                  text="Telephone"
                  color="--squash"
                  textColor="--black"
                />
                <TextLogin>Appellez-nous au 00 00 00 00 00.</TextLogin>
                <TitleWithArrow
                  text="Mail"
                  link="mailto:contact@ebdo-lejournal.com"
                  color="--squash"
                  textColor="--black"
                />
                <TextLogin>
                  Envoyez votre question à{' '}
                  <a href="mailto:service-abo@ebdo-lejournal.com">
                    service-abo@ebdo-lejournal.com
                  </a>
                </TextLogin>
              </Col>
            </Row>
          </Layout>
        </ThemeProvider>
      </div>
    )
  }
}
Login.propTypes = {
  dispatchLoginEmail: PropTypes.func,
  dispatchLoginEmailCode: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoginEmail: email => dispatch(loginEmail(email)),
    dispatchLoginEmailCode: (email, code) =>
      dispatch(loginEmailCode(email, code)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
