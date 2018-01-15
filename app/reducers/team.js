import Immutable from 'immutable'

import { Team, TeamList } from 'models/team'
import { GET_TEAM } from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: '',
  members: Immutable.List()
})

function teamReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEAM:
      return state
        .set('members', Immutable.List(TeamList.map(entry => Team(entry))))
        .set('loading', false)
    default:
      return state
  }
}

export default teamReducer
