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
              <p>
                Une question ? Vous n’êtes sûrement pas le premier. Parcourez
                toutes les interrogations de lecteurs auxquelles nous avons
                répondu.
              </p>
            </Col>
          </Row>
        </Layout>
      </IntroWrap>
      <Layout>
        <Row>
          <TextWrap xs={12} sm={6} smOffset={3}>
            <p>
              L'un est éditeur, l'autre est grand reporter. Ensemble, ils ont
              fondé XXI et 6Mois, deux revues de référence, sans publicité,
              vendues en librairie. Avec de nouvelles recrues, ils préparent un
              hebdomadaire de presse d'un genre nouveau et toujours sans
              publicité.
            </p>
          </TextWrap>
          <TextWrap xs={12} sm={6} smOffset={3}>
            Nous sommes atteints d’un mal étrange : la sur-information. Chaque
            possesseur d’un smartphone accède directement 24H/24 à un nombre
            d’articles disponibles et gratuits qui progresse de manière folle, à
            des milliards d’images et de vidéos, un foisonnement de sources
            d’informations sans précédent dans l’Histoire de l’humanité. Mais au
            lieu de nous donner des clés de compréhension, l'information nous
            noie. Les journaux ne sont plus des repères. Leur utilité et celle
            des journalistes sont remises en cause. Leur crédibilité est en
            baisse continue. Les journalistes sont submergés, dilués et
            contestés. Où est la vérité ? Comment s’y retrouver ? Nous ne sommes
            pas condamnés à être mal informés. Forts de dix ans d'expérience
            avec les revues XXI et 6Mois ainsi que de deux ans de recherche,
            nous décidons de lancer un hebdomadaire de presse d’un genre nouveau
            qui répond à ce défi. Ebdo, un journal sans publicité, libre de tous
            les pouvoirs, de toutes les influences. Nos journalistes n’auront de
            compte à rendre à personne si ce n’est à vous, leurs lecteurs. Notre
            seule ressource, c’est vous. Ebdo, un journal dont les lecteurs sont
            acteurs. L’échange avec vous est le moteur de notre projet :
            reportages en immersion chez vous, recueil de témoignages… Avec
            l'outil numérique, nous voulons mettre en place un système
            radicalement innovant d’échanges entre les lecteurs et la rédaction.
            Ebdo, un rendez-vous sur papier. Chaque semaine, il sera un remède
            pour lutter contre le chaos de l’information continue. Un journal
            qui, nous l'espérons, vous aidera à vous ressourcer, vous divertir
            et vous émerveiller. Il donnera des clés de compréhension. Ce sera
            un rendez-vous avec le monde, de l’intime au lointain, du coin de la
            rue au bout de la terre, pour se connecter avec les autres et avec
            soi-même. Toutes les ressources de l’image seront utilisées – la
            photo, le dessin, les cartes, la bande dessinée. Ce sera un guide
            pour mieux comprendre le monde, y trouver sa place et en devenir
            acteur. Ebdo, l'essentiel chaque vendredi, à partir du 12 janvier
            2018. L'équipe Ebdo.
          </TextWrap>
        </Row>
      </Layout>
      <Footer />
    </div>
  )
}

ManifestPage.propTypes = {
  dispatch: PropTypes.func,
  page: PropTypes.string,
  isLoggedIn: PropTypes.bool
}

export default ManifestPage
