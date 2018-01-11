/**
 *
 * SecondaryFooter
 *
 */

import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'
import Link from 'components/Link'
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

const SecondaryFooterWrapper = styled.section`
  background-color: var(--voodoo);

  .m-up {
    ${media.tablet`
      order: -1;
    `};
  }
  .m-border {
    ${media.tablet`
      padding: 40px 0;
      margin: 40px 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      border-bottom: 1px solid rgba(255,255,255,0.1);

    `};
  }
`
const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  line-height: 26px;
  ${media.tablet`
    font-size: 16px;
    line-height: 22px;
  `};
`

const LinkWrapper = styled.div`
  margin-bottom: 20px;
`

const RowSimpleBorder = styled(Row)`
  @media (min-width: 768px) {
    .w-5:nth-of-type(2) {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`

const SecondaryFooter = () => (
  <SecondaryFooterWrapper>
    <Layout>
      <RowSimpleBorder between="sm">
        <ColCustom w={5} m={13} />
        <ColCustom w={5} m={13} className="m-border">
          <Title>Mentions légales</Title>
          <LinkWrapper>
            <Link to="/mentions-legales">Mentions légales</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link to="/cgv">Conditions générales de ventes</Link>
          </LinkWrapper>
        </ColCustom>
        <ColCustom w={5} m={13} className="m-up">
          <LinkWrapper>
            <Title>Contacter la rédaction</Title>
            <Link to="mailto:redaction@ebdo-lejournal.com">
              service-lecteurs@ebdo-lejournal.com
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Title>Contacter le service lecteurs</Title>
            <Link to="mailto:service-lecteurs@ebdo-lejournal.com">
              service-lecteurs@ebdo-lejournal.com
            </Link>
          </LinkWrapper>
        </ColCustom>
        <ColCustom w={5} m={13} />
      </RowSimpleBorder>
    </Layout>
  </SecondaryFooterWrapper>
)

SecondaryFooter.propTypes = {}

export default SecondaryFooter
