/**
 *
 * Newsletter
 *
 */

import React from 'react'
import { Col } from 'react-styled-flexboxgrid'
import PropTypes from 'prop-types'
import { media } from 'global-styles'

import styled from 'styled-components'
import TextBlock from 'components/TextBlock'
import ColCustom from 'components/Grid/Col'

const MobileWrapper = styled.div`
  ${media.tablet`
    padding-top: 35px;
  `};
`

const NewsletterFooter = props => {
  const { children } = props
  return (
    <ColCustom w={11} m={13}>
      <MobileWrapper>
        <TextBlock title="Newsletter" type="footer">
          Inscrivez-vous pour ne rien manquer de nos actualités (nous ne vous
          enverrons pas de spam).
        </TextBlock>
        {children}
      </MobileWrapper>
    </ColCustom>
  )
}

NewsletterFooter.propTypes = {
  children: PropTypes.node
}

export default NewsletterFooter
