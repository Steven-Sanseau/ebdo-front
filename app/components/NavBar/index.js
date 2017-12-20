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

const LinkWrap = styled.div`
  flex: 1;
  text-align: center;
  a {
    color: var(--silver);
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
    border-right: 1px solid var(--silver);
  }
  .mgr {
    margin-right: 19px;
  }

  ${media.tablet`
    margin: 30px 0;
`};
`

const Menu = styled.div`
  background: white;
`

const menuFixedStyle = {
  borderBottom: '1px solid var(--silver)',
  padding: '7px 25px'
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
  }

  state = {
    menuFixed: false
  }

  handleRoute = () => {
    this.props.dispatch(push('abonnement'))
  }

  handleStateChange(status) {
    if (status.status === Sticky.STATUS_FIXED) {
      this.setState({ menuFixed: true })
    }
    if (status.status === Sticky.STATUS_ORIGINAL) {
      this.setState({ menuFixed: false })
    }
  }

  render() {
    const { menuFixed } = this.state
    return (
      <Sticky onStateChange={this.handleStateChange} innerZ={1}>
        <Menu
          menuFixed={menuFixed}
          style={menuFixed ? menuFixedStyle : menuStyle}
        >
          <Row>
            <Col xs={12} sm={menuFixed ? 5 : 4}>
              <Title menuFixed={menuFixed}>
                <Logo
                  width={menuFixed ? 65 : 150}
                  height={menuFixed ? 25 : 56}
                />
              </Title>
              <Subtitle menuFixed={menuFixed}>
                À chaque époque <br /> son journal.
              </Subtitle>
            </Col>
            <Col
              xs={menuFixed ? false : 12}
              sm={menuFixed ? 6 : 7}
              smOffset={1}
            >
              <FlexWrap menuFixed={menuFixed}>
                <LinkWrap color="--tomato">
                  <Link to="team">L&apos;équipe</Link>
                </LinkWrap>
                <LinkWrap color="--sunflower">
                  <Link to="#">Pourquoi ?</Link>
                </LinkWrap>
                <LinkWrap className="withBorder" color="--topaz">
                  <Link to="#">La Fabrique</Link>
                </LinkWrap>
                <LinkWrapMobile color="--squash">
                  <Link to="login">Connexion</Link>
                </LinkWrapMobile>
                <LinkWrapMobile className="mgr">
                  <Button handleRoute={this.handleRoute} color="--squash">
                    Je m&apos;abonne
                  </Button>
                </LinkWrapMobile>
                <LinkWrap style={menuFixed ? hidden : {}}>
                  <Button handleRoute={this.handleRoute} color="--warm-purple">
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

NavBar.propTypes = { dispatch: PropTypes.func }

export default NavBar
