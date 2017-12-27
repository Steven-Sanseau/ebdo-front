import Immutable from 'immutable'

import {
  LOGIN_EMAIL_ERROR,
  LOGIN_EMAIL_SUCCESS,
  LOGIN_EMAIL_CODE_SUCCESS,
  LOGIN_USER_SUCCESS
} from '../actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: null,
  waitingForCode: false,
  token: null,
  isUserConnected: false
})

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_EMAIL_SUCCESS:
      return state.set('waitingForCode', true)
    case LOGIN_EMAIL_ERROR:
      return state.set('error', action.error)
    case LOGIN_EMAIL_CODE_SUCCESS:
      return state.set('token', action.token).set('isUserConnected', true)
    case LOGIN_USER_SUCCESS:
      return state.set('isUserConnected', true)
    default:
      return state
  }
}

export default loginReducer
