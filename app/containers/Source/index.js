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
    const { isLoggedIn, client } = this.props
    return (
      <div>
        <Helmet>
          <title>Espace Abonné</title>
          <meta name="description" content="La Source - Espace Abonné Ebdo" />
        </Helmet>
        <SourcePage isLoggedIn={isLoggedIn} client={client} />
      </div>
    )
  }
}

Source.propTypes = {
  isLoggedIn: PropTypes.bool,
  client: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeIsLoggedIn(),
  client: makeSelectClient()
})

export default connect(mapStateToProps, {})(Source)
