import Immutable from 'immutable'

import TeamModel from 'models/team'
import { GET_TEAM } from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: '',
  members: new Immutable.Record({})
})

function teamReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEAM:
      return state.set('members', TeamModel).set('loading', true)
    default:
      return state
  }
}

export default teamReducer
