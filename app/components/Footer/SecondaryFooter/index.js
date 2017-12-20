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
      <Row>
        <Col smOffset={3} xs={12} sm={3}>
          <Title>Mentions légales</Title>
        </Col>
        <Col xs={12} sm={6}>
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
        </Col>
      </Row>
    </Layout>
  </SecondaryFooterWrapper>
)

SecondaryFooter.propTypes = {}

export default SecondaryFooter
