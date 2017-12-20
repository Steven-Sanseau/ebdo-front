/**
 *
 * Newsletter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { media } from 'global-styles'

import styled from 'styled-components'
import MailIcon from 'components/Icon/MailIcon'

const MobileWrapper = styled.div`
  position: relative;
  ${media.tablet`
    padding-top: 35px;
  `};
`
const BlockWrapper = styled.div`
  background-color: var(--background);
  border-radius: 28px;
  padding: 30px 50px;
`

const NewsletterBlock = props => {
  const { children } = props
  return (
    <BlockWrapper>
      <MobileWrapper>
        <div>
          Inscrivez-vous pour <strong>ne rien manquer de nos actualités</strong>{' '}
          (nous ne vous enverrons pas de spam).
        </div>
        {children}
      </MobileWrapper>
    </BlockWrapper>
  )
}

NewsletterBlock.propTypes = {
  children: PropTypes.node
}

export default NewsletterBlock
