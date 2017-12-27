import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { makeSelectPathName } from 'selectors/route'
import ManifestPage from 'components/ManifestPage'

export class Manifest extends React.Component {
  render() {
    const { dispatch, page } = this.props
    return (
      <div>
        <Helmet>
          <title>Manifest</title>
          <meta name="description" content="manifest ebdo" />
        </Helmet>
        <ManifestPage dispatch={dispatch} page={page} />
      </div>
    )
  }
}

Manifest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  page: makeSelectPathName()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Manifest)
