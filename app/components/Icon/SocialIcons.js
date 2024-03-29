import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import Facebook from 'components/Icon/Facebook'
import Instagram from 'components/Icon/Instagram'
import Twitter from 'components/Icon/Twitter'

const IconWrapper = styled.a`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  display: inline-block;
  color: white;
`
const Wrapper = styled.div`
  margin-top: 30px;
`
const SocialIcons = () => (
  <Wrapper>
    <IconWrapper
      rel="noopener"
      target="_blank"
      href="https://www.facebook.com/ebdolejournal/">
      <Facebook />
    </IconWrapper>
    <IconWrapper
      rel="noopener"
      target="_blank"
      href="https://www.instagram.com/ebdolejournal/">
      <Instagram />
    </IconWrapper>
    <IconWrapper
      rel="noopener"
      target="_blank"
      href="https://twitter.com/ebdolejournal/">
      <Twitter />
    </IconWrapper>
  </Wrapper>
)

// SocialIcons.propTypes = {
//   width: PropTypes.number,
//   height: PropTypes.number,
//   color: PropTypes.string
// }

export default SocialIcons
