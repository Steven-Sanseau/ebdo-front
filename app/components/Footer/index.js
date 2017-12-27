import React from 'react'
import PropTypes from 'prop-types'

// import { Grid } from 'react-styled-flexboxgrid'
// import styled from 'styled-components'

import MainFooter from 'components/Footer/MainFooter'
import SecondaryFooter from 'components/Footer/SecondaryFooter'
import RecapAbo from 'components/RecapAbo'

const Footer = props => (
  <div>
    <RecapAbo dispatch={props.dispatch} />
    <MainFooter />
    <SecondaryFooter />
  </div>
)

Footer.propTypes = {
  dispatch: PropTypes.func
}

export default Footer
