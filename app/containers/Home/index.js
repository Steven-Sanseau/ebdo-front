import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'

import { makeSelectPathName } from 'selectors/route'
import { setOfferParams } from 'actions/offer'

import { ThemeProvider } from 'styled-components'
import CookieBannerWrapper from 'components/CookieBanner'
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
    const { dispatch, page, dispatchSetOfferParams } = this.props
    return (
      <div>
        <Helmet>
          <title>ebdo</title>
          <meta name="description" content="Homepage Ebdo" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <HomePage
            dispatch={dispatch}
            page={page}
            dispatchSetOfferParams={dispatchSetOfferParams}
          />
        </ThemeProvider>
        <CookieBannerWrapper />
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dispatchSetOfferParams: PropTypes.func,
  page: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  page: makeSelectPathName()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetOfferParams: params => dispatch(setOfferParams(params)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
