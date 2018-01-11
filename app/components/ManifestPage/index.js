import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Footer from 'components/Footer'
import styled from 'styled-components'
import { media } from 'global-styles'

import NavBar from 'components/NavBar'

const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    padding: 40px 0;
  `};
`
const IntroWrap = styled.div`
  padding-top: 100px;
  padding-bottom: 30px;
  background-color: var(--sunflower);
  color: black;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    max-width: 450px;
    font-size: 18px;
  }
`
const TextWrap = styled(Col)`
  padding-top: 100px;
  padding-bottom: 100px;
  p {
    font-weight: 700;
    font-size: 18px;
  }
`

function ManifestPage(props) {
  return (
    <div>
      <NavBar
        dispatch={props.dispatch}
        isFixed
        page={props.page}
        isLoggedIn={props.isLoggedIn}
      />
      <IntroWrap>
        <Layout>
          <Row>
            <Col xs={12} sm={6}>
              <h2>Manifeste</h2>
              <p>Une question ?</p>
            </Col>
          </Row>
        </Layout>
      </IntroWrap>
      <Layout>
        <Row>
          <TextWrap xs={12} sm={6} smOffset={3}>
            <p>
              Nous sommes noyés sous les informations, en perte de repères.{' '}
            </p>
            <br />
            <h4>Comment nous y retrouver ? </h4>
            Forts de dix ans d’expérience avec les revues XXI et 6Mois ainsi que
            de deux ans de recherche, nous lançons un nouvel hebdomadaire de
            presse pour répondre à ce défi et reprendre pied.{' '}
            <h4>ebdo, un rendez-vous sur papier. </h4>
            Chaque semaine, un remède pour lutter contre le chaos de
            l’information. Pour nous ressourcer, découvrir, comprendre. Pour
            nous donner des clés. Un rendez-vous avec le monde, de l’intime au
            lointain, du coin de la rue au bout de la Terre, pour nous connecter
            avec les autres et nous-mêmes.
            <h4>Ebdo, un journal dont les lecteurs sont les acteurs.</h4>
            L’échange avec vous est le moteur de notre projet. Avec l’outil
            numérique, nous mettons en place un système innovant d’interaction
            entre les lecteurs et la rédaction, La Source. C’est une boîte à
            idées, à questions et à initiatives, qui recueille témoignages et
            expertises.
            <h4>Ebdo, un journal sans publicité</h4>
            libre de tout pouvoir, de toute influence. Nos journalistes n’ont de
            compte à rendre à personne si ce n’est à vous, lecteurs. Notre seule
            ressource, c’est vous. Un guide pour mieux comprendre le monde, y
            trouver sa place et en devenir acteur Ebdo, l’essentiel, chaque
            vendredi
          </TextWrap>
        </Row>
      </Layout>
      <Footer dispatch={props.dispatch} />
    </div>
  )
}

ManifestPage.propTypes = {
  dispatch: PropTypes.func,
  page: PropTypes.string,
  isLoggedIn: PropTypes.bool
}

export default ManifestPage
