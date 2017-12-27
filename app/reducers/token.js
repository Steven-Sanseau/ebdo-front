import Immutable from 'immutable'
import TokenModel from 'models/token'

import {
  POST_TOKEN,
  SET_TOKEN_STRIPE,
  SET_TOKEN_STRIPE_LOADED,
  POST_TOKEN_LOADED,
  POST_TOKEN_ERROR,
  SET_TOKEN_STRIPE_ERROR,
  SET_PAYMENT_METHOD,
  NEW_CHECKOUT,
  NEW_CHECKOUT_TRY
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: '',
  tokenStripe: {},
  mandatSepa: {},
  data: new TokenModel()
})

function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case POST_TOKEN:
      return state.set('loading', true).set('errorMessage', '')
    case SET_TOKEN_STRIPE:
      return state.set('loading', true).set('error', false)
    case SET_TOKEN_STRIPE_LOADED:
      return state
        .set('tokenStripe', action.tokenStripe)
        .set('error', false)
        .setIn(['data', 'stripe_token_id'], action.tokenStripe.id)
        .setIn(['data', 'stripe_card_id'], action.tokenStripe.card.id)
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
        .set('data', new TokenModel(action.token))
    case SET_TOKEN_STRIPE_ERROR: {
      return state
        .set('error', true)
        .set('loading', false)
        .set('errorMessage', action.error.error.message)
    }
    case SET_PAYMENT_METHOD:
      return state.setIn(
        ['data', 'token_type'],
        action.method === 2 ? 'stripe' : 'sepa'
      )
    case NEW_CHECKOUT:
      return initialState
    case NEW_CHECKOUT_TRY:
      return initialState
    default:
      return state
  }
}

export default tokenReducer
