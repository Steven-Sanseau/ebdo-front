import React from 'react'
import PropTypes from 'prop-types'
import Iframe from 'react-iframe'

import { Row, Col } from 'react-styled-flexboxgrid'
import Footer from 'components/Footer'
import styled from 'styled-components'
import { media } from 'global-styles'

import NavBar from 'components/NavBar'

const StyledIframe = styled(Iframe)`
  position: relative;
  min-height: 800px;
`

function SourcePage(props) {
  const { client } = props
  return (
    <div>
      <NavBar
        dispatch={props.dispatch}
        isFixed
        page="/source"
        isLoggedIn={props.isLoggedIn}
      />
      <Row>
        <Col xs={12}>
          {props.isLoggedIn && (
            <StyledIframe
              url={`https://ebdo.typeform.com/to/Et1CiO?prenom=${
                client.first_name
              }&email=${client.email}`}
              display="initial"
              position="relative"
            />
          )}
          {!props.isLoggedIn && 'La source publique'}
        </Col>
      </Row>
    </div>
  )
}

SourcePage.propTypes = {
  dispatch: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  client: PropTypes.object
}

export default SourcePage
