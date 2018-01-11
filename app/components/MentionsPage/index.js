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
  background-color: var(--pale-grey);
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

function MentionsPage(props) {
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
              <h2>Mentions Légales</h2>
            </Col>
          </Row>
        </Layout>
      </IntroWrap>
      <Layout>
        <Row>
          <TextWrap xs={12} sm={6} smOffset={3}>
            <h1>ebdo-le-journal.com</h1>
            <h2>ÉDITEUR : ROLLIN PUBLICATIONS</h2>
            SAS au capital de 46 506 € RCS Paris B n° 499 502 870 Siège social :
            27 rue Jacob 75006 Paris France Tél : 01 85 73 63 60 Président :
            Laurent Beccaria Directeur général, directeur de la publication :
            Thierry Mandon N° ISSN : en cours N° CPPAP : en cours
            <h2>HÉBERGEUR : </h2>
            Heroku.com
            <h2>INFORMATIQUE ET LIBERTÉS </h2>
            L’éditeur Rollin Publications a fait l’objet d’une déclaration
            n°2139381 auprès de la commission nationale informatique et libertés
            (CNIL) en application de la loi n°78-17 du 6 janvier 1978 relative à
            l'informatique, aux fichiers et aux libertés. Chaque internaute
            ayant déposé des informations nominatives le concernant sur le site
            dispose des droits d'opposition, d'accès et de rectification de ces
            données. Ainsi, il peut exiger que les informations le concernant
            soient rectifiées ou effacées. Chaque internaute peut exercer ces
            droits en écrivant à EBDO : 17 - 19 rue Visconti, 75006 Paris,
            France.
            <h2>Licence et droits de reproduction</h2>
            Par l'accès au site ebdo-lejournal.com, la société Rollin
            Publications consent à l'utilisateur qui l'accepte une licence dans
            les présentes conditions. La licence confère à l'utilisateur un
            droit d'usage privé, non collectif et non exclusif, sur le contenu
            du site. Elle comprend le droit de reproduire pour stockage aux fins
            de représentation sur écran monoposte et de reproduction, en un
            exemplaire, pour copie de sauvegarde ou tirage sur papier. Toute
            mise en réseau, toute rediffusion, sous quelque forme, même
            partielle, est donc interdite. Ce droit est personnel, il est
            réservé à l'usage exclusif et non collectif du licencié. Il n'est
            transmissible en aucune manière. Tout autre usage est soumis à
            autorisation préalable et expresse. La violation de ces dispositions
            impératives soumet le contrevenant, et toutes personnes
            responsables, aux peines pénales et civiles prévues par la loi.
          </TextWrap>
        </Row>
      </Layout>
      <Footer dispatch={props.dispatch} />
    </div>
  )
}

MentionsPage.propTypes = {
  dispatch: PropTypes.func,
  page: PropTypes.string,
  isLoggedIn: PropTypes.bool
}

export default MentionsPage
