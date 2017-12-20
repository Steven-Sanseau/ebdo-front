import React from 'react'
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import injectSaga from 'utils/injectSaga'
import { ThemeProvider } from 'styled-components'

import HomePage from 'components/HomePage'

const theme = {
  flexboxgrid: {
    // Defaults
    gutterWidth: 0, // rem
    outerMargin: 0 // rem
  }
}

export class Home extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </div>
    )
  }
}

Home.propTypes = {
  // dispatch: PropTypes.func.isRequired,
}

export default Home
