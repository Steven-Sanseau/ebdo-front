import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row } from 'react-styled-flexboxgrid'
import Footer from 'components/Footer'
import styled from 'styled-components'
import { media } from 'global-styles'

import { push } from 'react-router'
import Col from 'components/Grid/Col'

import NavBar from 'components/NavBar'

import AccountItem from 'components/Account/AccountItem'

import TitleWithArrow from 'components/TitleWithArrow'

const AccountPageWrapper = styled.div`
  background-color: var(--background);
  padding-top: 120px;
  min-width: 1150px;
`

const Title = styled.h3`
  color: var(--squash);
  font-size: 28px;
  margin-bottom: 30px;
  margin-top: 0;
  max-width: 450px;
  text-align: left;

  span {
    color: var(--black);
  }
  ${media.tablet`
    font-size: 22px;
    line-height: 24px;
  `};
`

const SubTitle = styled.div`
  font-size: 16px;
  text-align: left;
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

export class AccountPage extends React.Component {
  render() {
    return (
      <Grid fluid>
        <NavBar
          isFixed
          page={this.props.page}
          dispatch={this.props.dispatch}
          isLoggedIn={this.props.isLoggedIn}
        />
        <AccountPageWrapper>
          <Row start="xs">
            <Col xs={3}>
              <Title>
                Bonjour Sylvain, <span>bienvenue dans votre espace abonné</span>
              </Title>
              <SubTitle>
                Vous recevrez bientôt votre <b>7e numéro</b>, nous espérons que
                la lecture d’Ebdo vous satisfait chaque semaine un peu plus.
              </SubTitle>
            </Col>

            <Col>
              <Row start="xs">
                <AccountItem
                  title="Partager mon avis"
                  description="Chaque semaine, deux questions pour avoir votre retour sur le numéro en cours."
                  color="--squash"
                  link={() => {
                    this.props.dispatch(push('/avis'))
                  }}
                  textLink="Je partage mon avis"
                />
                <AccountItem
                  title="Participer à la Source"
                  description=""
                  color="--turquoise-blue"
                  link={() => {
                    this.props.dispatch(push('/source'))
                  }}
                  textLink="Déposer une contribution"
                />
                <AccountItem
                  title="Se rencontrer"
                  description="liste des events"
                  color="--topaz"
                  link={() => {
                    this.props.dispatch(push('/rencontre'))
                  }}
                  textLink="Voir plus de dates"
                />
                <AccountItem
                  title="Héberger un Journaliste"
                  description="Inscrivez votre logement et recevez un journaliste en enquête près de chez vous."
                  color="--warm-purple"
                  link={() => {
                    this.props.dispatch(push('/heberger'))
                  }}
                  textLink="M'inscrire en tant qu'hôte"
                />
                <AccountItem
                  title="Faire découvrir Ebdo"
                  description="Vous en parlez mieux que nous, voici comment vous pouvez nous aider."
                  color="--peacock-blue"
                  link={() => {
                    this.props.dispatch(push('/essai'))
                  }}
                  textLink="Envoyer un numéro d'essai"
                />
              </Row>
            </Col>
          </Row>
          <Row>
            <ColStyled w={9} m={13} mc>
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
          </Row>
        </AccountPageWrapper>
        <Footer hideRecap dispatch={this.props.dispatch} />
      </Grid>
    )
  }
}

AccountPage.propTypes = {
  dispatch: PropTypes.func,
  page: PropTypes.string,
  isLoggedIn: PropTypes.bool
}

export default AccountPage
