import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { makeSelectPathName } from 'selectors/route'

import TeamPage from 'components/TeamPage'

export class Team extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { dispatch, page } = this.props
    return (
      <div>
        <Helmet>
          <title>Team</title>
          <meta name="description" content="Description of Team" />
        </Helmet>
        <TeamPage dispatch={dispatch} page={page} />
      </div>
    )
  }
}
Team.propTypes = {
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

export default compose(withConnect)(Team)
