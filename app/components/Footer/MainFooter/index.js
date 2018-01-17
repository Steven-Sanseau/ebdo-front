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
const RowFirstLine = styled(Row)`
  @media (min-width: 768px) {
    .w-5:nth-of-type(2),
    .w-5:nth-of-type(3) {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`
const RowSimpleBorder = styled(Row)`
  @media (min-width: 768px) {
    .w-5:nth-of-type(2) {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`

const MainFooter = () => (
  <MainFooterWrapper>
    <Layout>
      <RowFirstLine between="sm">
        <ColCustom w={5} m={13}>
          <Logo color="var(--white-true)" />
          <LogoWrapper>
            Par les créateurs de <br />
            <a
              target="_blank"
              rel="noopener"
              href="http://www.revue21.fr/?utm_source=ebdo&utm_medium=footer">
              <Image
                src="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/XXI.png&w=28&t=fit&il"
                alt="XXI"
                height={22}
              />
            </a>
            <EtWrapper>et</EtWrapper>
            <a
              target="_blank"
              rel="noopener"
              href="http://www.6mois.fr/?utm_source=ebdo&utm_medium=footer">
              <Image
                src="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/6mois-white.png&w=76&t=fit&il"
                alt="6 mois"
                height={22}
              />
            </a>
          </LogoWrapper>
        </ColCustom>
        <ColCustom w={5} m={13}>
          <MobileWrapper>
            <TitleWithArrow
              text="Besoin d'aide ?"
              linkOutside="https://aide.ebdo-lejournal.com/fr/"
              color="--topaz"
            />
            <TitleWithArrow
              text="Manifeste"
              link="/manifest"
              color="--sunflower"
            />
            <TitleWithArrow text="L'équipe" link="/equipe" color="--tomato" />
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
      </RowFirstLine>
      <NewsletterWrapper>
        <RowSimpleBorder between="sm">
          <ColCustom w={5} m={13}>
            <Image
              src="//images.weserv.nl/?url=ssl:s3.eu-west-3.amazonaws.com/ebdo/front/website/footer.png&w=300&t=fit&il"
              alt="footer illustration ebdo"
              width="100%"
            />
          </ColCustom>
          <ColCustom w={5} m={13}>
            <MobileWrapper>
              <TextBlock title="Où nous trouver ?" type="footer">
                Ebdo est présent dans plus de 20.000 kiosques en France.
                N’hésitez pas à vous renseigner auprès de vos bureaux de presse.
              </TextBlock>
            </MobileWrapper>
          </ColCustom>
          <NewsletterContainer type="footer" />
        </RowSimpleBorder>
      </NewsletterWrapper>
    </Layout>
  </MainFooterWrapper>
)

MainFooter.propTypes = {}

export default MainFooter
