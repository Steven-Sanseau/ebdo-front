import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import { media } from 'global-styles'

import AboProposition from 'components/RecapAbo/AboProposition'
import Image from 'components/Image'
import ColCustom from 'components/Grid/Col'

import '!file-loader?name=[name].[ext]!images/0-couv.jpg'

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
  ${'' /* display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: -60px; */}
  margin-bottom: -94px;

  ${media.tablet`
    img {
      z-index: -1;
      margin-bottom: -100px;
    }
  `};
`

const RecapAbo = props => (
  <Layout>
    <Row between="sm">
      <ColStyled w={5} m={13} mc>
        <ImageWrapper>
          <Image src="/0-couv.jpg" alt="Couv" width="100%" />
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
          Le prochain numéro chez vous, gratuitement.
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
          Rejoignez notre communauté de lecteurs, et recevez ebdo chez vous tous
          les vendredi.
        </AboProposition>
      </ColCustom>
      <ColCustom w={5} m={13} mc>
        <AboProposition
          title="Déjà abonné ?"
          buttonText="La source"
          buttonColor="--turquoise-blue"
          to="/login"
          dispatch={props.dispatch}
        >
          Accédez à La Source pour participer, gérer votre abonnement, offrir
          ebdo...
        </AboProposition>
      </ColCustom>
    </Row>
  </Layout>
)

RecapAbo.propTypes = {
  dispatch: PropTypes.func
}

export default RecapAbo
