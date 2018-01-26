import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import { media } from 'global-styles'

import AboProposition from 'components/RecapAbo/AboProposition'
import Image from 'components/Image'
import ColCustom from 'components/Grid/Col'

const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 0;
  padding-bottom: 0;

  ${media.tablet`
    padding: 40px 0;
    border: none;
    width: calc(100% - 20px);
  `};
`
const ColStyled = styled(ColCustom)`
  ${media.tablet`
    order: 2;
  `};
`
const ImageWrapper = styled.div`
  margin-bottom: -94px;

  ${media.tablet`
    img {
      z-index: -1;
      margin-bottom: -100px;
    }

  `};
  img {
    width: 100%;
  }
`

const RecapAbo = props => (
  <Layout>
    <Row between="sm">
      <ColStyled w={5} m={13} mc>
        <ImageWrapper>
          <Image
            src="https://s3.eu-west-3.amazonaws.com/ebdo/front/home/thumbmail/current/0.jpg"
            alt="Couverture ebdo"
          />
        </ImageWrapper>
      </ColStyled>
      <ColCustom w={5} m={13} mc>
        <AboProposition
          title="Vous voulez essayer ebdo ?"
          buttonText="Je commande"
          buttonColor="--warm-purple"
          to="/essai"
          dispatch={props.dispatch}
        >
          Recevez notre prochain numéro chez vous, gratuitement.
        </AboProposition>
      </ColCustom>
      <ColCustom w={5} m={13} mc>
        <AboProposition
          title="Déjà convaincu ?"
          buttonText="Je m'abonne"
          buttonColor="--squash"
          to="/abonnement"
          dispatch={props.dispatch}
        >
          Rejoignez notre communauté de lecteurs, déposez vos idées sur La
          Source et recevez Ebdo chez vous chaque vendredi.
        </AboProposition>
      </ColCustom>
      <ColCustom w={5} m={13} mc>
        <AboProposition
          title="Je me connecte"
          buttonText="La source"
          buttonColor="--turquoise-blue"
          to="/lasource"
          dispatch={props.dispatch}
        >
          Accédez à votre espace personnel pour gérer votre abonnement ou offrir
          Ebdo.
        </AboProposition>
      </ColCustom>
    </Row>
  </Layout>
)

RecapAbo.propTypes = {
  dispatch: PropTypes.func
}

export default RecapAbo
