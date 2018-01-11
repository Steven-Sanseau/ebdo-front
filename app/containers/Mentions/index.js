import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectPathName } from 'selectors/route'
import { makeIsLoggedIn } from 'selectors/login'

import MentionsPage from 'components/MentionsPage'

export class Mentions extends React.Component {
  render() {
    const { dispatch, page, isLoggedIn } = this.props
    return (
      <div>
        <Helmet>
          <title>Mentions Légales</title>
          <meta name="description" content="Mentions légales ebdo le journal" />
        </Helmet>
        <MentionsPage dispatch={dispatch} page={page} isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}
Mentions.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Mentions)
