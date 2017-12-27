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
  `}
`

const SecondaryFooterWrapper = styled.section`
  background-color: var(--voodoo);
`
const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  line-height: 26px;
`

const LinkWrapper = styled.div`
  margin-bottom: 20px;
`

const SecondaryFooter = () => (
  <SecondaryFooterWrapper>
    <Layout>
      <Row between="sm">
        <ColCustom w={5} m={13}>
        </ColCustom>
        <ColCustom w={5} m={13}>
          <Title>Mentions légales</Title>
        </ColCustom>
        <ColCustom w={5} m={13}>
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
        <ColCustom w={5} m={13}>
        </ColCustom>
      </Row>
    </Layout>
  </SecondaryFooterWrapper>
)

SecondaryFooter.propTypes = {}

export default SecondaryFooter
