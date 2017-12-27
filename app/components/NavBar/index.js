import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col, Row } from 'react-styled-flexboxgrid'
import { Link } from 'react-router-dom'
import Sticky from 'react-stickynode'
import { media } from 'global-styles'
import { push } from 'react-router-redux'

import Button from 'components/Button'
import Logo from 'components/Icon/Logo'
import 'components/NavBar/NavBar.css'

const LinkWrap = styled.div`
  flex: 1;
  text-align: center;
  color: var(--cool-grey);
  a {
    color: inherit;
    text-decoration: none;
    line-height: 26px;
  }
  a:hover {
    color: var(${props => (props.color ? props.color : 'inherit')});
  }
  ${media.tablet`
    display: none;
`};
`
const LinkBurger = styled(LinkWrap)`
  text-align: left;
  margin-bottom: 10px;
  ${media.tablet`
    display: inherit;
  `};
`

const LinkWrapMobile = LinkWrap.extend`
  ${media.tablet`
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
  ${media.tablet`
    display: ${props => (props.menuFixed ? 'none' : 'inherit')};
  `};
`

const Subtitle = styled.h2`
  color: var(--topaz);
  font-size: 24px;
  line-height: 26px;
  display: ${props => (props.menuFixed ? 'none' : 'inherit')};
`

const FlexWrap = styled.div`
  display: flex;
  align-items: center;

  .withBorder {
    border-left: 1px solid var(--silver);
    ${media.tablet`
    border-right: ${props =>
      props.menuFixed ? 'none' : '1px solid var(--silver)'}; ;
    border-left: none;
    margin-right: ${props => (props.menuFixed ? '0' : '20px')};;
    padding-right: 20px;
  `};
  }

  ${media.tablet`
    margin: ${props => (props.menuFixed ? '6px 0' : '30px')}; 0;
`};
`

const Menu = styled.nav`
  background: white;
  ${media.tablet`
    margin-bottom: 30px;
  `};
`
const Burger = styled(Col)`
  ${media.tablet`
    display: ${props => (props.menuFixed ? 'inherit' : 'none')};
  `};

  .narrowLinks {
    display: none;
  }
`

const menuFixedStyle = {
  borderBottom: '1px solid var(--silver)',
  padding: '7px 25px',
  zIndex: '100'
}

const menuStyle = {
  padding: '40px 0',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '1200px',
  width: 'calc(100% - 80px)',
  transition:
    'transform 0.2s ease-out, height 0.4s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 0.2s ease-out'
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
    this.props.dispatch(push('abonnement'))
  }
  handleRouteTryit = () => {
    this.props.dispatch(push('essai'))
  }

  handleStateChange(status) {
    if (status.status === Sticky.STATUS_FIXED) {
      this.setState({ menuFixed: true })
    }
    if (status.status === Sticky.STATUS_ORIGINAL) {
      this.setState({ menuFixed: false })
    }
  }
  burgerToggle() {
    const linksEl = document.querySelector('.narrowLinks')
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none'
    } else {
      linksEl.style.display = 'block'
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
        >
          <Row between="sm">
            <Col xs={menuFixed ? 3 : 12} sm={menuFixed ? 4 : 2}>
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
              <Burger className="navNarrow" menuFixed={menuFixed} sm={false}>
                <div className="ctn-hamburger" onClick={this.burgerToggle}>
                  <div className="hamburger" />
                </div>
                <div className="narrowLinks">
                  <LinkBurger
                    color="--tomato"
                    style={page === 'team' ? { color: 'var(--tomato)' } : {}}
                  >
                    <Link to="team">L&apos;équipe</Link>
                  </LinkBurger>
                  <LinkBurger
                    color="--sunflower"
                    style={
                      page === '/manifest' ? { color: 'var(--sunflower)' } : {}
                    }
                  >
                    <Link to="/manifest">Pourquoi ?</Link>
                  </LinkBurger>
                  <LinkBurger
                    color="--peacock-blue"
                    style={
                      page === '/source' ? { color: 'var(--peacock-blue)' } : {}
                    }
                  >
                    <Link to="source">La source</Link>
                  </LinkBurger>
                  <LinkBurger color="--topaz">
                    <a href="http://fabrique.ebdo-lejournal.com/">
                      La Fabrique
                    </a>
                  </LinkBurger>
                </div>
              </Burger>
            </Col>
            <Col xs={menuFixed ? 9 : 12} sm={menuFixed ? 8 : 7}>
              <FlexWrap menuFixed={menuFixed}>
                <LinkWrap
                  color="--tomato"
                  style={page === '/team' ? { color: 'var(--tomato)' } : {}}
                >
                  <Link to="team">L&apos;équipe</Link>
                </LinkWrap>
                <LinkWrap
                  color="--sunflower"
                  style={
                    page === '/manifest' ? { color: 'var(--sunflower)' } : {}
                  }
                >
                  <Link to="manifest">Pourquoi ?</Link>
                </LinkWrap>
                <LinkWrap
                  color="--peacock-blue"
                  style={
                    page === '/source' ? { color: 'var(--peacock-blue)' } : {}
                  }
                >
                  <Link to="source">La Source</Link>
                </LinkWrap>
                <LinkWrap color="--topaz">
                  <a href="http://fabrique.ebdo-lejournal.com/">La Fabrique</a>
                </LinkWrap>
                <LinkWrapMobile color="--squash" className="withBorder">
                  <Link to="login">Connexion</Link>
                </LinkWrapMobile>
                <LinkWrapMobile style={{ marginRight: '19px' }}>
                  <Button
                    minWidth="130px"
                    handleRoute={this.handleRouteSubscribe}
                    color="--squash"
                  >
                    Je m&apos;abonne
                  </Button>
                </LinkWrapMobile>
                <LinkWrap style={menuFixed ? hidden : {}}>
                  <Button
                    handleRoute={this.handleRouteTryit}
                    color="--warm-purple"
                  >
                    J&apos;essaye
                  </Button>
                </LinkWrap>
              </FlexWrap>
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
  page: PropTypes.string
}

export default NavBar
