import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectPathName } from 'selectors/route'
import { makeIsLoggedIn } from 'selectors/login'

import LegalPage from 'components/LegalPage'

export class Cgv extends React.Component {
  render() {
    const { dispatch, page, isLoggedIn } = this.props
    return (
      <div>
        <Helmet>
          <title>Conditions générales de ventes</title>
          <meta
            name="description"
            content="conditions générales de ventes ebdo"
          />
        </Helmet>
        <LegalPage dispatch={dispatch} page={page} isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}
Cgv.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Cgv)
