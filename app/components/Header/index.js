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
            <Logo width={175} height={66} />
          </LogoWrapper>
          <SubTitle>
            <IconHome>
              <HomeIcon />
            </IconHome>
            <span>Retourner à l'accueil</span>
          </SubTitle>
        </Link>
      </Wrapper>
    </div>
  )
}

Header.propTypes = {}

export default Header
