import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectPathName } from 'selectors/route'
import { makeIsLoggedIn } from 'selectors/login'

import TeamPage from 'components/TeamPage'

export class Team extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { dispatch, page, isLoggedIn } = this.props
    return (
      <div>
        <Helmet>
          <title>Team</title>
          <meta name="description" content="Description of Team" />
        </Helmet>
        <TeamPage dispatch={dispatch} page={page} isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}
Team.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Team)
