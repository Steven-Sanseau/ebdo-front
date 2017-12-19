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
  card: {},
  tokenStripe: {},
  mandatSepa: null
})

function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case POST_TOKEN:
      return state.set('loading', true).set('errorMessage', null)
    case SET_TOKEN_STRIPE:
      return state.set('tokenStripe', action.tokenStripe)
    case POST_TOKEN_ERROR:
      return state
        .set('loading', false)
        .set('errorMessage', action.error)
        .set('error', true)
    case POST_TOKEN_LOADED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('token_id', action.token.token_id)
    default:
      return state
  }
}

export default tokenReducer
