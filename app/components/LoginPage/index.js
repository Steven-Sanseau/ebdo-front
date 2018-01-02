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
    padding: 40px 0;
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

  .laSource {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    display: block;
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
  }
`

const TitleColor = styled.h2`
  font-size: 22px;
  color: #F39625;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 75%;
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
  const { loginEmail, loginEmailCode, waitingForCode, handleSubmit, handleEmail, handleCode, email, code, handleRoute } = props
  return (
    <LoginWrap>
        <Layout>
          <Row>
            <Col xs={12}>
              <Header />
            </Col>
          </Row>
          <RowStyled center="sm">
            <ColStyled w={9} m={13} mc className="mgr">
              <img src="la-source.png" alt="la source" className="laSource" />
              <Title>
                Accédez à La Source
              </Title>
              <p>
                Entrez votre adresse email pour accéder à La Source. Nous vous enverrons un mail contenant votre accès temporaire.
              </p>
              <form onSubmit={handleSubmit}>
                {!waitingForCode && (
                  <InputText
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    placeholder="contact@mail.fr"
                    label="Adresse email"
                  />
                )}
                {waitingForCode && (
                  <div>
                    <p>Veuillez rentrer le code pour valider la connexion</p>
                    <input
                      name="code"
                      type="number"
                      value={code}
                      onChange={handleCode}
                    />
                  </div>
                )}
              </form>
              <ButtonWrap
                handleRoute={handleRoute}
                color="--booger"
              >
                Recevoir mon lien
              </ButtonWrap>
            </ColStyled>
            <ColStyled w={9} m={13} mc>
              <TitleColor>Vous voulez gérer votre abonnement ?</TitleColor>
              <p>
                Un espace dédié vous permettra bientôt d’éditer toutes vos
                informations. D’ici là, contactez-nous pour tout changement :
              </p>
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
              <TextLogin className="no-b">
                Envoyez votre question à{' '}
                <a className="link" href="mailto:service-abo@ebdo-lejournal.com">
                  service-abo@ebdo-lejournal.com
                </a>
              </TextLogin>
            </ColStyled>
          </RowStyled>
        </Layout>
      <Footer />
    </LoginWrap>
  )
}

LoginPage.propTypes = {
  handleSubmit: PropTypes.func,
  handleEmail: PropTypes.func,
  handleRoute: PropTypes.func,
  handleCode: PropTypes.func,
}

export default LoginPage
