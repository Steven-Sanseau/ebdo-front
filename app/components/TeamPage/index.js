import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Footer from 'components/Footer'
import styled from 'styled-components'
import { media } from 'global-styles'

import NavBar from 'components/NavBar'

import '!file-loader?name=[name].[ext]!../../images/team/equipe.jpg'

const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    padding: 40px 0;
  `};
`
const ImageWrap = styled.div`
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url(equipe.jpg);
`
const IntroWrap = styled.div`
  padding-top: 100px;
  padding-bottom: 30px;
  background-color: var(--tomato);
  color: white;

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
const ImageTeam = styled.div`
  background-image: url(equipe.jpg);
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 30%;
  background-size: cover;
  background-position: center;
`
const Profile = styled(Col)`
  margin-bottom: 80px;
  span {
    color: var(--grey-blue);
  }
  h3 {
    margin-bottom: 10px;
    margin-top: 0;
  }
  p {
    font-size: 18px;
  }
  a {
    color: #658089;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid #658089;
  }
  a:hover {
    background: #658089;
    color: #ffffff;
  }
`

function TeamPage(props) {
  return (
    <div>
      <NavBar dispatch={props.dispatch} isFixed page="team"/>
      <ImageWrap />
      <IntroWrap>
        <Layout>
          <Row>
            <Col xs={12} sm={6}>
              <h2>L'équipe</h2>
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
        </Row>
        <Row between="sm">
          <Profile xs={12} sm={4}>
            <ImageTeam />
            <h3>
              Laurent Beccaria, <span>Président</span>
            </h3>
            <p>
              « Ces dernières années, voir vingt couvertures sur le même sujet,
              tourner les pages sans que rien me m’accroche, cela me rend
              triste. Les journaux ont perdu leur magie. Je suis convaincu que
              nous ne sommes pas voués à être mal informés. »<br />
              <a mailto="l.beccaria@rollinpublications.fr">
                l.beccaria@rollinpublications.fr
              </a>
            </p>
          </Profile>
          <Profile xs={12} sm={4}>
            <ImageTeam />
            <h3>
              Laurent Beccaria, <span>Président</span>
            </h3>
            <p>
              « Ces dernières années, voir vingt couvertures sur le même sujet,
              tourner les pages sans que rien me m’accroche, cela me rend
              triste. Les journaux ont perdu leur magie. Je suis convaincu que
              nous ne sommes pas voués à être mal informés. »<br />
              <a mailto="l.beccaria@rollinpublications.fr">
                l.beccaria@rollinpublications.fr
              </a>
            </p>
          </Profile>
          <Profile xs={12} sm={4}>
            <ImageTeam />
            <h3>
              Laurent Beccaria, <span>Président</span>
            </h3>
            <p>
              « Ces dernières années, voir vingt couvertures sur le même sujet,
              tourner les pages sans que rien me m’accroche, cela me rend
              triste. Les journaux ont perdu leur magie. Je suis convaincu que
              nous ne sommes pas voués à être mal informés. »<br />
              <a mailto="l.beccaria@rollinpublications.fr">
                l.beccaria@rollinpublications.fr
              </a>
            </p>
          </Profile>
          <Profile xs={12} sm={4}>
            <ImageTeam />
            <h3>
              Laurent Beccaria, <span>Président</span>
            </h3>
            <p>
              « Ces dernières années, voir vingt couvertures sur le même sujet,
              tourner les pages sans que rien me m’accroche, cela me rend
              triste. Les journaux ont perdu leur magie. Je suis convaincu que
              nous ne sommes pas voués à être mal informés. »<br />
              <a mailto="l.beccaria@rollinpublications.fr">
                l.beccaria@rollinpublications.fr
              </a>
            </p>
          </Profile>
        </Row>
      </Layout>
      <Footer />
    </div>
  )
}

TeamPage.propTypes = { dispatch: PropTypes.func }

export default TeamPage