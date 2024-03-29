import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeIsLoggedIn } from 'selectors/login'
import { makeSelectClient } from 'selectors/client'

import SourcePage from 'components/SourcePage'

export class Source extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isLoggedIn, client, dispatch } = this.props
    return (
      <div>
        <Helmet>
          <title>La Source par ebdo - Espace Abonné</title>
          <meta name="description" content="La Source - Espace Abonné Ebdo" />
        </Helmet>
        <SourcePage
          isLoggedIn={isLoggedIn}
          client={client}
          dispatch={dispatch}
        />
      </div>
    )
  }
}

Source.propTypes = {
  isLoggedIn: PropTypes.bool,
  client: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeIsLoggedIn(),
  client: makeSelectClient()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Source)
