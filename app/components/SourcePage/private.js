import React from 'react'
import PropTypes from 'prop-types'
import Iframe from 'react-iframe'
import { Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'

const StyledIframe = styled(Iframe)`
  position: relative;
  min-height: 800px;
`

function SourcePagePrivate(props) {
  const { client } = props
  return (
    <div>
      <StyledIframe
        url={`https://ebdo.typeform.com/to/Et1CiO?${
          client.data.first_name ? `prenom=${client.data.first_name}` : ''
        }&${client.data.email ? `email=${client.data.email}` : ''}`}
        display="initial"
        position="relative"
      />
    </div>
  )
}

SourcePagePrivate.propTypes = {
  client: PropTypes.object
}

export default SourcePagePrivate
