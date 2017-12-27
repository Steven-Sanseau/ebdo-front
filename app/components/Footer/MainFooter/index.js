/**
 *
 * MainFooter
 *
 */

import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'

import TitleWithArrow from 'components/TitleWithArrow'
import TextBlock from 'components/TextBlock'
import NewsletterContainer from 'containers/NewsletterContainer'
import Image from 'components/Image'
import SocialIcons from 'components/Icon/SocialIcons'
import Logo from 'components/Icon/Logo'
import { media } from 'global-styles'
import ColCustom from 'components/Grid/Col'

import '!file-loader?name=[name].[ext]!images/logos/6mois-white.png'
import '!file-loader?name=[name].[ext]!images/logos/XXI.png'

const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  padding: 80px 0;

  ${media.tablet`
    padding: 40px 0;
  `};
`
const MainFooterWrapper = styled.section`
  background-color: var(--warm-purple);
  position: relative;
`

const NewsletterWrapper = styled.div`
  margin-top: 40px;

  ${media.tablet`
    margin-top: 0;
  `};
`

const LogoWrapper = styled.div`
  margin-top: 10px;

  ${media.tablet`
    padding-bottom: 35px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  `};
`
const EtWrapper = styled.span`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`

const MobileWrapper = styled.div`
  ${media.tablet`
    padding-bottom: 35px;
    padding-top: 35px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  `};
`

const MainFooter = () => (
  <MainFooterWrapper>
    <Layout>
      <Row between="sm">
        <ColCustom w={5} m={13}>
          <Logo color="var(--white-true)" />
          <LogoWrapper>
            Par les créateurs de <br />
            <Image src="/XXI.png" alt="XXI" height={22} />
            <EtWrapper>et</EtWrapper>
            <Image src="/6mois-white.png" alt="6 mois" height={22} />
          </LogoWrapper>
        </ColCustom>
        <ColCustom w={5} m={13}>
          <MobileWrapper>
            <TitleWithArrow text="Besoin d'aide ?" link="/" color="--topaz" />
            <TitleWithArrow
              text="Manifeste"
              link="/manifest"
              color="--sunflower"
            />
            <TitleWithArrow text="L'équipe" link="/team" color="--tomato" />
          </MobileWrapper>
        </ColCustom>
        <ColCustom w={5} m={13}>
          <MobileWrapper>
            <TitleWithArrow
              text="La source"
              link="/source"
              color="--turquoise-blue"
            />
            <Col xs={12} sm={8}>
              Des centaines d’abonnés ont déjà contribué à la source,
              rejoignez-les !
            </Col>
          </MobileWrapper>
        </ColCustom>
        <ColCustom w={5} m={13}>
          <MobileWrapper>
            <TextBlock title="Réseaux sociaux" type="footer">
              Tous les jours, du contenu exclusif sur nos réseaux
            </TextBlock>
            <SocialIcons />
          </MobileWrapper>
        </ColCustom>
      </Row>
      <NewsletterWrapper>
        <Row between="sm">
          <ColCustom w={5} m={13}></ColCustom>
          <ColCustom w={5} m={13}>
            <MobileWrapper>
              <TextBlock title="Où nous trouver ?" type="footer">
                Ebdo est présent dans plus de 10 000 kiosques en France.
                N’hésitez pas à vous renseigner auprès de vos bureau de presse.
              </TextBlock>
            </MobileWrapper>
          </ColCustom>
          <NewsletterContainer type="footer" />
        </Row>
      </NewsletterWrapper>
    </Layout>
  </MainFooterWrapper>
)

MainFooter.propTypes = {}

export default MainFooter
