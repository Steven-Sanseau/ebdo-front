/**
 *
 * ManifestoBlock
 *
 */

import React from 'react'
import styled from 'styled-components'

import { media } from 'global-styles'
import { Row, Col } from 'react-styled-flexboxgrid'

import TextBlock from 'components/TextBlock'
import ColCustom from 'components/Grid/Col'

import NewsletterContainer from 'containers/NewsletterContainer'
import { Link } from 'react-router-dom'
import '!file-loader?name=[name].[ext]!../../images/home/tournee-ebdo.jpg'
import '!file-loader?name=[name].[ext]!../../images/home/fabrique.png'

const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
  `};
`
const SectionWrapper = styled(Row)`
  padding: 80px 0;
  ${media.tablet`
    padding: 40px 0;
  `};
`
const SectionWrapperBig = styled(Row)`
  padding: 80px 0;
  ${media.tablet`
    padding: 40px 0;
  `};
`
const LinkWrapper = styled(Link)`
  color: var(--grey-blue);
  border-bottom: 1px solid var(--grey-blue);
  text-decoration: none;

  &:hover {
    background-color: var(--grey-blue);
    color: var(--white-true);
  }
`
const Legend = styled.legend`
  margin-top: 20px;
  font-size: 18px;
`

function ManifestoBlock() {
  return (
    <Layout>
      <SectionWrapperBig>
        <Col xs={12} sm={3}>
          <TextBlock
            title="Une équipe aux profils multiples"
            colorTitle="--warm-purple"
            colorSpan="--warm-purple"
            colorHr="--warm-purple"
          >
            La mission d’<strong>ebdo</strong> :{' '}
            <span>
              nous aider à être des citoyens et à agir sur notre quotidien
            </span>, favoriser les forces créatives de la société française,
            dans toutes les couches sociales et tous les territoires. <br />
            <br />
            <LinkWrapper to="/team">Découvrir l&apos;équipe</LinkWrapper>
          </TextBlock>
        </Col>
        <Col xs={12} sm={3}>
          <TextBlock
            title="ebdo est un projet de société"
            colorTitle="--booger"
            colorSpan="--booger"
            colorHr="--booger"
          >
            Tout citoyen doit pouvoir s&apos;informer à un prix accessible.{' '}
            <strong>ebdo est le moins cher des hebdo :</strong>{' '}
            <span>3,50€</span> en kiosque.
          </TextBlock>
        </Col>
        <Col xs={12} sm={3}>
          <TextBlock
            title="Un journal sans pub, entièrement indépendant"
            colorTitle="--sunflower"
            colorSpan="--sunflower"
            colorHr="--sunflower"
          >
            Sans publicité, <strong>ebdo est libre de tout pouvoir.</strong>{' '}
            Vous, nos lecteurs, êtes notre seule ressource.{' '}
            <span>C’est un pacte de confiance.</span> Les journalistes discutent
            avec les lecteurs, ils sollicitent leurs compétences et tiennent
            compte de leur expérience.
          </TextBlock>
        </Col>
        <Col xs={12} sm={3}>
          <TextBlock
            title="La source, une vraie relation avec nos lecteurs"
            colorTitle="--turquoise-blue"
            colorSpan="--turquoise-blue"
            colorHr="--turquoise-blue"
          >
            <strong>Nos lecteurs font communauté.</strong>{' '}
            <span>Ils sont au même niveau que l&apos;équipe,</span> sans eux
            nous ne sommes rien : nos abonnés, ceux qui nous hébergent, ceux qui
            nous irriguent de leur idées{' '}
            <LinkWrapper to="/login">via La Source</LinkWrapper>, ceux qui nous
            rencontrent lors de nos événements, ceux qui participent à faire
            connaître <strong>ebdo</strong>, ceux qui sont heureux de lire{' '}
            <strong>ebdo</strong> tout simplement.
          </TextBlock>
        </Col>
      </SectionWrapperBig>
      <SectionWrapper>
        <Col xs={12} sm={7}>
          <img src="/tournee-ebdo.jpg" alt="tournée ebdo" width="100%" />
          <Legend>Photo issue de la tournée d'<strong>ebdo</strong> en minibus</Legend>
        </Col>
        <Col xs={12} sm={4} smOffset={1}>
          <TextBlock
            title="Un journal qui se construit ensemble..."
            colorTitle="--sunflower"
            fontSize="28px"
          >
            Nous sommes atteints d’un mal étrange :{' '}
            <strong>la sur-information.</strong> Chaque possesseur d’un
            smartphone accède directement 24H/24 à un nombre d’articles
            disponibles et gratuits qui progresse de manière folle, à des
            milliards d’images et de vidéos, un foisonnement de sources
            d’informations sans précédent dans l’Histoire de l’humanité. <br />
            <br />
            Mais au lieu de nous donner des clés de compréhension, l’information
            nous noie (…)<br />
            <br />
            <LinkWrapper to="/manifest">Lire la suite du Manifeste</LinkWrapper>
          </TextBlock>
        </Col>
      </SectionWrapper>
      <SectionWrapperBig>
        <ColCustom w={7} m={13}>
          <TextBlock title="La Fabrique" colorTitle="--topaz">
            ...vous en explique toutes les coulisses. Rendez-vous sur{' '}
            <LinkWrapper to="#">la Fabrique</LinkWrapper>.
          </TextBlock>
          <NewsletterContainer />
        </ColCustom>
        <Col xs={12} sm={7} smOffset={1}>
          <img src="fabrique.png" alt="la fabrique" width="100%" />
        </Col>
      </SectionWrapperBig>
    </Layout>
  )
}

ManifestoBlock.propTypes = {}

export default ManifestoBlock
