import Immutable from 'immutable'

import Client from 'models/Client'

import {
  POST_TOKEN,
  SET_TOKEN_STRIPE,
  POST_TOKEN_LOADED,
  POST_TOKEN_ERROR
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: null,
  data: new Client()
})

function clientReducer(state = initialState, action) {
  switch (action.type) {
    case POST_CLIENT:
      return state.set('loading', true).set('errorMessage', null)
    case SET_CLIENT_EMAIL:
      return state.setIn(['data', 'email'], action.email)

    case POST_CLIENT_ERROR:
      return state
        .set('loading', false)
        .set('errorMessage', action.error)
        .set('error', true)
    case POST_CLIENT_LOADED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', Client(action.client))
    default:
      return state
  }
}

export default clientReducer
