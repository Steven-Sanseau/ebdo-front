import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import 'url-search-params-polyfill'

import Helmet from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectPathName } from 'selectors/route'
import { makeIsLoggedIn } from 'selectors/login'

import AccountPage from 'components/AccountPage'

const theme = {
  flexboxgrid: {
    // Defaults
    gutterWidth: 0, // rem
    outerMargin: 0 // rem
  }
}

export class Account extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      isLoadingLogin, dispatch, page, isLoggedIn
    } = this.props

    return (
      <div>
        <Helmet>
          <title>Gérer mon abonnement ebdo</title>
          <meta name="description" content="Mon espace de gestion abonnement" />
        </Helmet>

        <ThemeProvider theme={theme}>
          <AccountPage
            {...this.props}
            dispatch={dispatch}
            page={page}
            isLoggedIn={isLoggedIn}
          />
        </ThemeProvider>
      </div>
    )
  }
}
Account.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dispatchSetOfferParams: PropTypes.func,
  offer: PropTypes.object,
  token: PropTypes.object,
  addressDelivery: PropTypes.object,
  addressInvoice: PropTypes.object,
  page: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  subscriptions: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  page: makeSelectPathName(),
  isLoggedIn: makeIsLoggedIn()
  // subscriptions: makeSelectSubscriptions()
})

function mapDispatchToProps(dispatch) {
  return {
    // getSubscriptions: () => dispatch(getSubscriptions()),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
