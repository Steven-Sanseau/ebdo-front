import React from 'react'

import LogoWrapper from './LogoWrapper'
import SubTitle from './SubTitle'
import Wrapper from './Wrapper'
import Logo from '../Icon/Logo'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Wrapper>
          <Link to="/">
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <SubTitle>Je m’abonne</SubTitle>
          </Link>
        </Wrapper>
      </div>
    )
  }
}

Header.propTypes = {}

export default Header
