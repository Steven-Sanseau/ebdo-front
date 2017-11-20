import React from 'react'

import Logo from './Logo'
import SubTitle from './SubTitle'
import Wrapper from './Wrapper'

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Wrapper>
          <Logo>ebdo</Logo>
          <SubTitle>Je m’abonne</SubTitle>
        </Wrapper>
      </div>
    )
  }
}

Header.propTypes = {}

export default Header
