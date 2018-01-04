import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeIsLoggedIn } from 'selectors/login'

import SourcePage from 'components/SourcePage'

export class Source extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isLoggedIn } = this.props
    return (
      <div>
        <Helmet>
          <title>Espace Abonné</title>
          <meta name="description" content="La Source - Espace Abonné Ebdo" />
        </Helmet>
        <SourcePage isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}

Source.propTypes = {
  isLoggedIn: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeIsLoggedIn()
})

export default connect(mapStateToProps, {})(Source)
