import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectPathName } from 'selectors/route'
import { makeIsLoggedIn } from 'selectors/login'
import { makeSelectTeamData } from 'selectors/team'

import { getTeam } from 'actions/team'

import TeamPage from 'components/TeamPage'

export class Team extends React.Component {
  componentDidMount() {
    this.props.dispatchGetTeam()
  }

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
  isLoggedIn: PropTypes.bool,
  teamMembers: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  page: makeSelectPathName(),
  isLoggedIn: makeIsLoggedIn(),
  teamMembers: makeSelectTeamData()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchGetTeam: () => dispatch(getTeam()),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)
