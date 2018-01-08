import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from 'components/Button'

const ButtonHelpWrapper = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
`

export default function StickyHelpCheckout(props) {
  return (
    <ButtonHelpWrapper>
      <Button handleRoute={props.handleRoute} color="--turquoise-blue">
        Besoin d'aide ?
      </Button>
    </ButtonHelpWrapper>
  )
}

StickyHelpCheckout.propTypes = {
  handleRoute: PropTypes.func
}
