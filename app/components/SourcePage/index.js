import React from 'react'
import PropTypes from 'prop-types'
import Iframe from 'react-iframe'

import { Row, Col } from 'react-styled-flexboxgrid'
import Footer from 'components/Footer'
import styled from 'styled-components'
import { media } from 'global-styles'

import NavBar from 'components/NavBar'

const TextWrap = styled(Col)`
  padding-top: 100px;
  padding-bottom: 100px;
  p {
    font-weight: 700;
    font-size: 18px;
  }
`
const Layout = styled.div`
  width: calc(100% - 80px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    padding: 40px 0;
  `};
`
const StyledIframe = styled(Iframe)`
  position: relative;
  min-height: 800px;
`

function SourcePage(props) {
  return (
    <div>
      <NavBar
        dispatch={props.dispatch}
        isFixed
        page="source"
        isLoggedIn={props.isLoggedIn}
      />
      <Layout>
        <Row>
          <TextWrap xs={12}>
            {props.isLoggedIn && (
              <StyledIframe
                url="https://ebdo.typeform.com/to/Et1CiO?prenom=xxxxx&email=xxxxx"
                display="initial"
                position="relative"
              />
            )}
            {!props.isLoggedIn && 'La source publique'}
          </TextWrap>
        </Row>
      </Layout>
      <Footer />
    </div>
  )
}

SourcePage.propTypes = { dispatch: PropTypes.func, isLoggedIn: PropTypes.bool }

export default SourcePage
