import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { ThemeProvider } from 'styled-components'

import HomePage from 'components/HomePage'

const theme = {
  flexboxgrid: {
    // Defaults
    gutterWidth: 0, // rem
    outerMargin: 0 // rem
  }
}

class Home extends React.Component {
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <Helmet>
          <title>ebdo</title>
          <meta name="description" content="Homepage Ebdo" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <HomePage dispatch={dispatch} />
        </ThemeProvider>
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Home)
