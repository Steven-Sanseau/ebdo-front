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
  padding-top: 5%;
  padding-bottom: 10%;
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
            </Col>
          </Row>
        </Layout>
      </IntroWrap>
      <Layout>
        <Row>
          <TextWrap xs={12} sm={6} smOffset={3}>
            <h2>Pourquoi ?</h2>
            Trop d’informations : chaque possesseur d’un smartphone accède
            aujourd’hui directement 24h/24 à un nombre d’articles disponibles et
            gratuits qui progresse de manière folle, à des milliards d’images et
            de vidéos… Au lieu de nous donner des clés de compréhension, le flux
            d’information nous noie.{' '}
            <strong>
              Nous voulons un journal à haute valeur ajoutée.
            </strong>{' '}
            <br />
            Trop de commentaires : pour avoir l’illusion de maîtriser ce flux,
            des commentaires à chaud, sans recul et peu documentés se
            multiplient. Les journaux ne sont plus des repères. La confiance qui
            leur est portée est en baisse continue. L’utilité des journalistes
            est remise en cause.{' '}
            <strong>
              Nous voulons un journal qui donne les moyens de se faire une
              opinion.
            </strong>{' '}
            <br />
            Trop peu de lecteurs : ceux qui goutaient au plaisir de lire un
            journal se font rares, les jeunes s’en détournent.{' '}
            <p>
              {' '}
              Nous voulons un journal qui s’adresse à tous, partout, qui
              considère les lecteurs comme des partenaires.{' '}
            </p>
            <p>Comment nous y retrouver ?</p>
            Ce nouvel hebdomadaire rassemble les fondateurs des revues XXI et
            6Mois ainsi que des journalistes venus de tous les horizons.{' '}
            <strong>Ebdo, un rendez-vous sur papier.</strong> Chaque semaine, il
            sera un remède pour lutter contre le chaos de l’information en
            continu. Un journal pour se ressourcer, découvrir et s’émerveiller.
            Un rendez-vous avec le monde, de l’intime au lointain, du coin de la
            rue au bout de la terre, pour se connecter avec les autres et
            soi-même. Un journal avec toutes les ressources qu’offre le papier :
            enquêtes, photos, BD, infographies... <br />
            <strong>
              Ebdo, un journal dont les lecteurs sont les acteurs.
            </strong>
            L’échange avec vous est le moteur de notre projet. Avec l’outil
            numérique, nous mettons en place un système innovant d’interaction
            entre les lecteurs et la rédaction, La Source, qui vous permet de
            donner votre avis, d’apporter votre témoignage, d’alerter la
            rédaction sur un sujet qui vous tient à cœur.<br />{' '}
            <strong>Ebdo, un journal sans publicité</strong>, libre de tous les
            pouvoirs et toutes les influences. Nos journalistes n’ont de compte
            à rendre à personne si ce n’est à vous, lecteurs. Notre seule
            ressource, c’est vous.{' '}
            <p>
              Un guide pour mieux comprendre le monde, y trouver sa place et en
              devenir acteur.{' '}
            </p>{' '}
            <br />
            <p>Ebdo, l’essentiel, chaque vendredi.</p>
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
