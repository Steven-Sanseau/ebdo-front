import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from 'react-styled-flexboxgrid'

import NavBar from 'components/NavBar'
import SourcePagePrivate from 'components/SourcePage/private'
import SourcePagePublic from 'components/SourcePage/public'

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
          {props.isLoggedIn && <SourcePagePrivate client={client} />}
          {!props.isLoggedIn && <SourcePagePublic dispatch={props.dispatch} />}
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
