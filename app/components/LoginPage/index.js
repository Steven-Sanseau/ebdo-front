import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-styled-flexboxgrid'
import Footer from 'components/Footer'
import styled from 'styled-components'
import { media } from 'global-styles'

import Header from 'components/Header'
import TitleWithArrow from 'components/TitleWithArrow'
import Col from 'components/Grid/Col'
import InputText from 'components/InputText'
import Button from 'components/Button'
import '!file-loader?name=[name].[ext]!images/logos/la-source.png'

const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    padding: 0;
    width: calc(100% - 20px);
  `};
`
const TextLogin = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid var(--silver);
  margin-bottom: 20px;

  &.no-b {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`
const LoginWrap = styled.div`
  background-color: #fafafa;
`
const ColStyled = styled(Col)`
  background-color: white;
  padding: 50px;
  font-size: 18px;

  ${media.tablet`
    margin-bottom: 30px;
    font-size: 16px;
    padding: 30px;
    line-height: 22px;
  `};

  .laSource {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    display: block;
    ${media.tablet`
      max-width: 100%;
    `};
  }
  a {
    margin: 0;
  }
  a.link {
    color: var(--grey-blue);
    text-decoration: none;
    border-bottom: 1px solid var(--grey-blue);
    &:hover {
      background: var(--grey-blue);
      color: #ffffff;
    }
  }
  input {
    width: 75%;
  }

  &.mgr {
    margin-right: calc(100% / 23);
    ${media.tablet`
      margin-right: auto;
    `};
  }
`

const RowStyled = styled(Row)`
  padding-top: 100px;
  padding-bottom: 200px;
  text-align: left;

  p {
    max-width: 450px;
    line-height: 26px;
    font-size: 18px;
    margin: 0;
    margin-bottom: 30px;
    ${media.tablet`
      font-size: 16px;
      line-height: 22px;
  `};
  }
  ${media.tablet`
    padding-top: 50px;
    padding-bottom: 140px;
  `};
`

const TitleColor = styled.h2`
  font-size: 22px;
  color: #f39625;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 75%;
  ${media.tablet`
    font-size: 20px;
  `};
`
const Title = styled.h2`
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 0;
`
const ButtonWrap = styled(Button)`
  margin-top: 30px;
  height: 40px;
`
function LoginPage(props) {
  const {
    waitingForCode,
    handleSubmit,
    handleEmail,
    handleCode,
    email,
    code,
    handleRoute,
    handleResendCode,
    isLoadingLogin,
    changeEmail,
    error,
    errorMessage
  } = props
  return (
    <LoginWrap>
      <Layout>
        <Row>
          <Col m={13} mc>
            <Header />
          </Col>
        </Row>
        <RowStyled center="sm">
          <ColStyled w={9} m={13} mc className="mgr">
            <img src="la-source.png" alt="la source" className="laSource" />
            <Title>Contribuer à La Source</Title>
            <p>
              Ici, pas de mot de passe compliqué à retenir. <br />
              Renseignez votre email et nous vous enverrons votre code de
              connexion temporaire.
            </p>
            <form onSubmit={handleSubmit}>
              {!waitingForCode && (
                <InputText
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  error={error}
                  errorMessage={errorMessage}
                  placeholder="contact@mail.fr"
                  label="Mon adresse email renseignée lors de mon abonnement:"
                />
              )}
              {waitingForCode && (
                <div>
                  <p>
                    Veuillez consulter votre boite de réception. Notre mail peut
                    prendre une petite minute à arriver.
                  </p>
                  <InputText
                    name="code"
                    type="number"
                    value={code}
                    onChange={handleCode}
                    placeholder="1234"
                    error={error}
                    errorMessage={errorMessage}
                    label="Votre code reçu par email"
                  />
                </div>
              )}
            </form>
            <ButtonWrap handleRoute={handleRoute} color="--booger">
              {isLoadingLogin && '...'}
              {!isLoadingLogin &&
                !waitingForCode &&
                'Recevoir mon code de connexion'}

              {!isLoadingLogin &&
                waitingForCode &&
                'Valider mon code de connexion'}
            </ButtonWrap>
            {!isLoadingLogin &&
              waitingForCode && (
                <div>
                  <a href="#" className="link" onClick={handleResendCode}>
                    <small>Générer un nouveau code</small>
                  </a>{' '}
                  <br />
                  <a href="#" className="link" onClick={changeEmail}>
                    <small>Modifier mon email</small>
                  </a>
                </div>
              )}
          </ColStyled>
          <ColStyled w={9} m={13} mc>
            <TitleColor>Vous voulez gérer votre abonnement ?</TitleColor>
            <p>
              Un espace dédié vous permettra bientôt d’éditer toutes vos
              informations. D’ici là, contactez-nous pour tout changement :
            </p>
            <TitleWithArrow
              text="Me réabonner"
              link="/abonnement"
              color="--squash"
              textColor="--black"
            />
            <TextLogin />
            <TitleWithArrow
              text="F.A.Q"
              linkOutside="https://aide.ebdo-lejournal.com?utm_source=home&utm_medium=login_page"
              color="--squash"
              textColor="--black"
            />
            <TextLogin>
              La réponse à votre question s’y trouve peut-être !
            </TextLogin>
            <TitleWithArrow
              text="Par Telephone"
              linkOutside="tel:+330176410595"
              color="--squash"
              textColor="--black"
            />
            <TextLogin>Appellez-nous au 01 76 41 05 95.</TextLogin>
            <TitleWithArrow
              text="Mail"
              link="mailto:abo@ebdo-lejournal.com"
              color="--squash"
              textColor="--black"
            />
            <TextLogin className="no-b">
              Envoyez votre question à{' '}
              <a className="link" href="mailto:abo@ebdo-lejournal.com">
                abo@ebdo-lejournal.com
              </a>
            </TextLogin>
          </ColStyled>
        </RowStyled>
      </Layout>
      <Footer dispatch={props.dispatch} />
    </LoginWrap>
  )
}

LoginPage.propTypes = {
  handleSubmit: PropTypes.func,
  handleEmail: PropTypes.func,
  handleRoute: PropTypes.func,
  handleResendCode: PropTypes.func,
  changeEmail: PropTypes.func,
  handleCode: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  dispatch: PropTypes.func,
  isLoadingLogin: PropTypes.bool
}

export default LoginPage
