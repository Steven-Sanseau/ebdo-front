import Immutable from 'immutable'

import {
  LOGIN_EMAIL_ERROR,
  LOGIN_EMAIL_SUCCESS
} from '../actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: null,
  waitingForCode: false
})

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_EMAIL_SUCCESS:
      return state.set('waitingForCode', true)
    case LOGIN_EMAIL_ERROR:
      return state.set('error', action.error)
    default:
      return state
  }
}

export default loginReducer
