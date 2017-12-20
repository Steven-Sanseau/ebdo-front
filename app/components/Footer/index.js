/**
 *
 * Footer
 *
 */

import React from 'react'
// import { Grid } from 'react-styled-flexboxgrid'
// import styled from 'styled-components'

import MainFooter from 'components/Footer/MainFooter'
import SecondaryFooter from 'components/Footer/SecondaryFooter'
import RecapAbo from 'components/RecapAbo'

const Footer = () => (
  <div>
    <RecapAbo />
    <MainFooter />
    <SecondaryFooter />
  </div>
)

Footer.propTypes = {}

export default Footer
