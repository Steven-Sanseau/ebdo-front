import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectPathName } from 'selectors/route'
import { makeIsLoggedIn } from 'selectors/login'
import ManifestPage from 'components/ManifestPage'

export class Manifest extends React.Component {
  render() {
    const { dispatch, page, isLoggedIn } = this.props
    return (
      <div>
        <Helmet>
          <title>Manifeste</title>
          <meta name="description" content="Manifeste ebdo" />
        </Helmet>
        <ManifestPage dispatch={dispatch} page={page} isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}

Manifest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.string,
  isLoggedIn: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  page: makeSelectPathName(),
  isLoggedIn: makeIsLoggedIn()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(Manifest)
