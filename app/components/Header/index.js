import React from 'react'
import styled from 'styled-components'
import LogoWrapper from './LogoWrapper'
import SubTitle from './SubTitle'
import Wrapper from './Wrapper'
import Logo from '../Icon/Logo'
import HomeIcon from '../Icon/HomeIcon'
import { Link } from 'react-router-dom'

const IconHome = styled.span`
  margin-right: 10px;
`
function Header() {
  return (
    <div>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <LogoWrapper>
            <Logo width={120} height={46} />
          </LogoWrapper>
          <SubTitle>
            <IconHome>
              <HomeIcon />
            </IconHome>
            Retourner à l'accueil
          </SubTitle>
        </Link>
      </Wrapper>
    </div>
  )
}

Header.propTypes = {}

export default Header
