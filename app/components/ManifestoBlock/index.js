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

const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    width: calc(100% - 20px);
  `};
`
const SectionWrapper = styled(Row)`
  .no-p {
    padding: 0;
  }
  ${media.tablet`
    // padding: 40px 0;
  `};
`
const SectionWrapperBig = styled(Row)`
  padding-top: 100px;
  padding-bottom: 120px;
  .no-p {
    padding: 0;
  }
  .hidden-xs {
    ${media.tablet`
      display: none;
    `};
  }
  .m-b-60 {
    ${media.tablet`
      margin-bottom: 60px;
    `};
  }
  .m-up {
    ${media.tablet`
      order: -1;
    `};
  }
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
  ${media.tablet`
    font-size: 18px;
    margin-bottom: 60px;
  `};
`

function ManifestoBlock() {
  return (
    <Layout>
      <SectionWrapperBig className="hidden-xs">
        <Col xs={12} sm={3}>
          <TextBlock
            title="Un projet de société"
            colorTitle="--booger"
            colorSpan="--booger"
            colorHr="--booger">
            Notre volonté : un journal accessible à tous. Un journal qui
            s’adresse à tous ses lecteurs et pas qu’en France. Pour cela, Ebdo
            est le moins cher des hebdomadaires d’actualité : vendu{' '}
            <span>3,50€</span> en kiosque.
          </TextBlock>
        </Col>
        <Col xs={12} smOffset={1} sm={3}>
          <TextBlock
            title="Un journal sans pub, entièrement indépendant"
            colorTitle="--sunflower"
            colorSpan="--sunflower"
            colorHr="--sunflower">
            Sans publicité, <strong>ebdo</strong> est libre de toute pression.
            Notre rédaction est 100% indépendante : nous choisissons librement
            nos sujets. Nos lecteurs sont notre seule ressource.{' '}
            <span>C’est un pacte de confiance.</span>
          </TextBlock>
        </Col>
        <Col xs={12} smOffset={1} sm={4}>
          <TextBlock
            title="Une relation quotidienne"
            colorTitle="--turquoise-blue"
            colorSpan="--turquoise-blue"
            colorHr="--turquoise-blue">
            Nos lecteurs font communauté. Sans eux, nous ne sommes rien : ils
            nous irriguent de leur idées via{' '}
            <LinkWrapper to="/source">La Source</LinkWrapper>, ils co-organisent
            des événements, nous hébergent et participent activement à faire
            connaître <strong>ebdo</strong>
          </TextBlock>
        </Col>
      </SectionWrapperBig>
      <SectionWrapper between="sm">
        <ColCustom w={14} m={13} mc>
          <iframe
            style={{ maxWidth: '100%' }}
            width="700"
            height="380"
            title="ebdo - La Tournée, le documentaire par Anouk Rapaport"
            src="https://www.youtube.com/embed/0bkkaMrMQC4?modestbranding=1&autohide=1&showinfo=0&controls=0"
            frameBorder="0"
            allowFullScreen
          />
          <Legend>
            <strong>ebdo - La Tournée</strong>. Le documentaire par Anouk
            Rapaport
          </Legend>
        </ColCustom>
        <ColCustom w={7} m={13} mc>
          <TextBlock
            title="Un journal qui se construit ensemble..."
            colorTitle="--sunflower"
            fontSize="28px"
            className="no-p">
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
        </ColCustom>
      </SectionWrapper>
      <SectionWrapperBig between="sm">
        <ColCustom w={7} m={13} mc>
          <TextBlock title="La Fabrique" colorTitle="--topaz" className="no-p">
            ...vous en explique toutes les coulisses. Rendez-vous sur{' '}
            <LinkWrapper to="#">la Fabrique</LinkWrapper>.
          </TextBlock>
          <NewsletterContainer />
        </ColCustom>
        <ColCustom w={14} m={13} mc className="m-up m-b-60">
          <img
            src="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/fabric.png&w=730&t=fit&il"
            alt="illustration la fabrique"
            width="100%"
          />
        </ColCustom>
      </SectionWrapperBig>
    </Layout>
  )
}

ManifestoBlock.propTypes = {}

export default ManifestoBlock
