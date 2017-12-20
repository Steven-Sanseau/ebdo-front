import React from 'react'

import LogoWrapper from './LogoWrapper'
import SubTitle from './SubTitle'
import Wrapper from './Wrapper'
import Logo from '../Icon/Logo'

function Header() {
  // eslint-disable-line react/prefer-stateless-function
  // render() {
  return (
    <div>
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <SubTitle>Je m’abonne</SubTitle>
      </Wrapper>
    </div>
  )
  // }
}

Header.propTypes = {}

export default Header
