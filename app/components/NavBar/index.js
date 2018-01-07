import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row } from 'react-styled-flexboxgrid'
import { Link } from 'react-router-dom'
import Sticky from 'react-stickynode'
import { media } from 'global-styles'
import { push } from 'react-router-redux'

import Button from 'components/Button'
import Col from 'components/Grid/Col'
import Logo from 'components/Icon/Logo'
import 'components/NavBar/NavBar.css'

import { logout } from 'actions/login'
import { newCheckout } from 'actions/checkout'

const LinkWrap = styled.div`
  text-align: center;
  margin-right: 30px;
  color: var(--cool-grey);
  a {
    color: inherit;
    text-decoration: none;
    line-height: 26px;
  }
  a:hover {
    color: var(${props => (props.color ? props.color : 'inherit')});
  }
  ${media.desktop`
    display: none;
`};
`
const LinkBurger = styled(LinkWrap)`
  text-align: left;
  margin-bottom: 10px;
  ${media.desktop`
    display: inherit;
  `};
`

const LinkWrapMobile = LinkWrap.extend`
  ${media.desktop`
    display: inherit;
    justify-content: center;
`};
`

const Title = styled.h1`
  font-size: ${props => (props.menuFixed ? '30px' : '66px')};
  line-height: ${props => (props.menuFixed ? '36px' : '56px')};
  margin-bottom: ${props => (props.menuFixed ? '0' : '10px')};
  margin-top: 0;
  line-height: inherit;
  ${media.desktop`
    display: ${props => (props.menuFixed ? 'none' : 'inherit')};
    svg {
      width: 100px;
    }
  `};
`

const Subtitle = styled.h2`
  color: var(--topaz);
  font-size: 24px;
  line-height: 26px;
  margin: 0;
  display: ${props => (props.menuFixed ? 'none' : 'inherit')};
`

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  padding-right: 3px;

  .withBorder {
    border-left: 1px solid var(--silver);
    padding-left: 30px;
    ${media.desktop`
    border-right: ${props =>
      props.menuFixed ? 'none' : '1px solid var(--silver)'}; ;
    border-left: none;
    margin-right: ${props => (props.menuFixed ? '0' : '20px')};;
    padding-right: 20px;
  `};
  }
  .hidden-xs {
    ${media.desktop`
      display: none;
    `};
  }
  ${media.desktop`
    margin: ${props => (props.menuFixed ? '0' : '30px')}; 0;
`};
`

const Menu = styled.nav`
  background: white;

  .nav-menu {
    width: ${props =>
      props.menuFixed ? 'calc(100% - 50px)' : 'calc(100% - 80px)'};
    margin-left: auto;
    margin-right: auto;
    ${props =>
      props.menuFixed
        ? 'padding: 6px 0;'
        : ''} transition: transform 0.2s ease-out,
      height 0.4s cubic-bezier(0.19, 1, 0.22, 1),
      -webkit-transform 0.2s ease-out;
    ${props => (props.menuFixed ? 'height: 50px;' : '')} overflow: hidden;

    ${media.desktop`
      width: calc(100% - 20px) !important;
      padding: 0;
      justify-content: end;
    `};

    .narrowLinks {
      display: ${props => (props.menuFixed ? 'block' : 'none')};
      ${props => (props.page !== '/' ? 'display: none;' : '')};
    }
  }
`
const Burger = styled.div`
  display: none;
  ${media.desktop`
    display: ${props => (props.menuFixed ? 'inherit' : 'none')};
  `};
`

const menuFixedStyle = {
  borderBottom: '1px solid var(--silver)',
  zIndex: '100'
}

const menuStyle = {
  padding: '40px 0',
  paddingBottom: '0',
  marginRight: 'auto',
  marginLeft: 'auto'
}

const hidden = {
  display: 'none'
}

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleStateChange = this.handleStateChange.bind(this)
    this.burgerToggle = this.burgerToggle.bind(this)
  }

  state = {
    menuFixed: false
  }

  handleRouteSubscribe = () => {
    this.props.dispatch(newCheckout())
    this.props.dispatch(push('abonnement'))
  }

  handleRouteTryit = () => {
    this.props.dispatch(push('essai'))
  }

  handleRouteLogout = () => {
    this.props.dispatch(logout())
  }

  handleStateChange(status) {
    if (status.status === Sticky.STATUS_FIXED) {
      this.setState({ menuFixed: true })
      document.querySelector('.nav-menu').style.height = '50px'
    }
    if (status.status === Sticky.STATUS_ORIGINAL) {
      this.setState({ menuFixed: false })
      document.querySelector('.nav-menu').style.height = 'inherit'
    }
  }

  burgerToggle() {
    const linksEl = document.querySelector('.nav-menu')
    if (linksEl.style.height === '') linksEl.style.height = '50px'
    if (linksEl.style.height === '50px') {
      linksEl.style.height = '194px'
    } else {
      linksEl.style.height = '50px'
    }
  }

  render() {
    let { menuFixed } = this.state
    const { isFixed, page } = this.props
    if (isFixed) {
      menuFixed = isFixed
    }

    return (
      <Sticky onStateChange={this.handleStateChange} innerZ={1}>
        <Menu
          menuFixed={menuFixed}
          style={menuFixed ? menuFixedStyle : menuStyle}
          page={page}>
          <Row between="sm" className="nav-menu">
            <Col m={13} mc>
              <Title menuFixed={menuFixed}>
                <Link to="/">
                  <Logo
                    width={menuFixed ? 65 : 150}
                    height={menuFixed ? 25 : 56}
                  />
                </Link>
              </Title>
              <Subtitle menuFixed={menuFixed}>
                À chaque époque <br /> son journal.
              </Subtitle>
            </Col>
            <Col m={13}>
              <FlexWrap menuFixed={menuFixed}>
                <Burger className="navNarrow" menuFixed={menuFixed} sm={false}>
                  <div className="ctn-hamburger" onClick={this.burgerToggle}>
                    <div className="hamburger" />
                  </div>
                </Burger>
                <LinkWrap
                  color="--tomato"
                  style={page === '/equipe' ? { color: 'var(--tomato)' } : {}}>
                  <Link to="/equipe">L&apos;équipe</Link>
                </LinkWrap>
                <LinkWrap
                  color="--sunflower"
                  style={
                    page === '/manifeste' ? { color: 'var(--sunflower)' } : {}
                  }>
                  <Link to="/manifeste">Pourquoi ?</Link>
                </LinkWrap>
                <LinkWrap
                  color="--peacock-blue"
                  style={
                    page === '/source' ? { color: 'var(--peacock-blue)' } : {}
                  }>
                  <Link to="/source">La Source</Link>
                </LinkWrap>
                <LinkWrap color="--topaz">
                  <a href="http://fabrique.ebdo-lejournal.com/">La Fabrique</a>
                </LinkWrap>
                {!this.props.isLoggedIn && (
                  <LinkWrapMobile color="--squash" className="withBorder">
                    <Link to="/connexion">Connexion</Link>
                  </LinkWrapMobile>
                )}
                {this.props.isLoggedIn && (
                  <LinkWrapMobile color="--squash" className="withBorder">
                    <Button
                      handleRoute={this.handleRouteLogout}
                      color="--squash">
                      Se déconnecter
                    </Button>
                  </LinkWrapMobile>
                )}
                <LinkWrapMobile style={menuFixed ? { marginRight: '0' } : {}}>
                  <Button
                    handleRoute={this.handleRouteSubscribe}
                    color="--squash">
                    Je m&apos;abonne
                  </Button>
                </LinkWrapMobile>
              </FlexWrap>
              <div className="narrowLinks">
                <LinkBurger
                  color="--tomato"
                  style={page === '/equipe' ? { color: 'var(--tomato)' } : {}}>
                  <Link to="/equipe">L&apos;équipe</Link>
                </LinkBurger>
                <LinkBurger
                  color="--sunflower"
                  style={
                    page === '/manifeste' ? { color: 'var(--sunflower)' } : {}
                  }>
                  <Link to="/manifeste">Pourquoi ?</Link>
                </LinkBurger>
                <LinkBurger
                  color="--peacock-blue"
                  style={
                    page === '/source' ? { color: 'var(--peacock-blue)' } : {}
                  }>
                  <Link to="/source">La source</Link>
                </LinkBurger>
                <LinkBurger color="--topaz">
                  <a href="http://fabrique.ebdo-lejournal.com/">La Fabrique</a>
                </LinkBurger>
              </div>
            </Col>
          </Row>
        </Menu>
      </Sticky>
    )
  }
}

NavBar.propTypes = {
  dispatch: PropTypes.func,
  isFixed: PropTypes.bool,
  page: PropTypes.string,
  isLoggedIn: PropTypes.bool
}

export default NavBar
