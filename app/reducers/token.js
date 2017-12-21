import Immutable from 'immutable'

import {
  POST_TOKEN,
  SET_TOKEN_STRIPE,
  POST_TOKEN_LOADED,
  POST_TOKEN_ERROR,
  SET_TOKEN_STRIPE_ERROR
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: '',
  card: {},
  tokenStripe: {},
  mandatSepa: null
})

function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case POST_TOKEN:
      return state.set('loading', true).set('errorMessage', '')
    case SET_TOKEN_STRIPE:
      return state
        .set('tokenStripe', action.tokenStripe)
        .set('error', false)
        .set('errorMessage', '')
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
    case SET_TOKEN_STRIPE_ERROR: {
      return state
        .set('error', true)
        .set('errorMessage', action.error.error.message)
    }
    default:
      return state
  }
}

export default tokenReducer
