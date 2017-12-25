import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Sticky from 'react-stickynode'
import Button from 'components/Button'

const ButtonHelpWrapper = styled.div`
  position: absolute;
  right: 50px;
  bottom: 20px;
`

export default function StickyHelpCheckout(props) {
  return (
    // <Sticky enabled top={50} bottomBoundary={1200}>
    <ButtonHelpWrapper>
      <Button handleRoute={props.handleRoute} color="--turquoise-blue">
        Besoin d'aide ?
      </Button>
    </ButtonHelpWrapper>
    // </Sticky>
  )
}

StickyHelpCheckout.propTypes = {
  handleRoute: PropTypes.func
}
