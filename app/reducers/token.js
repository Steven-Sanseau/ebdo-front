import Immutable from 'immutable'
import TokenModel from 'models/token'
import base64 from 'base-64'

import {
  POST_TOKEN,
  SET_TOKEN_STRIPE,
  SET_TOKEN_STRIPE_LOADED,
  POST_TOKEN_LOADED,
  POST_TOKEN_ERROR,
  SET_TOKEN_STRIPE_ERROR,
  SET_PAYMENT_METHOD,
  NEW_CHECKOUT,
  NEW_CHECKOUT_TRY,
  GET_TOKEN_SLIMPAY_LOADED,
  GET_TOKEN_SLIMPAY_ERROR,
  GET_TOKEN_SLIMPAY,
  GET_VALID_TOKEN_SLIMPAY,
  GET_VALID_TOKEN_SLIMPAY_LOADED,
  GET_VALID_TOKEN_SLIMPAY_ERROR
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: '',
  errorCardType: {
    card: false,
    cvc: false,
    year: false
  },
  tokenStripe: {},
  mandatSepa: {},
  slimpay_iframe_content: null,
  data: new TokenModel()
})

function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case POST_TOKEN:
      return state.set('loading', true).set('errorMessage', '')
    case SET_TOKEN_STRIPE:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'token_type'], 'stripe')
        .set('errorCardType', initialState.get('errorCardType'))
    case SET_TOKEN_STRIPE_LOADED:
      return state
        .set('tokenStripe', action.tokenStripe)
        .set('error', false)
        .set('errorCardType', initialState.get('errorCardType'))
        .setIn(['data', 'stripe_token_id'], action.tokenStripe.id)
        .setIn(['data', 'token_type'], 'stripe')
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
      let errorType = {
        card: false,
        cvc: false,
        year: false
      }

      if (
        action.error.error.code == 'incomplete_number' ||
        action.error.error.code == 'invalid_number'
      ) {
        errorType.card = true
      }

      if (action.error.error.code == 'incomplete_cvc') {
        errorType.cvc = true
      }

      if (action.error.error.code == 'incomplete_expiry') {
        errorType.year = true
      }

      return state
        .set('error', true)
        .set('loading', false)
        .set('errorMessage', action.error.error.message)
        .set('errorCardType', errorType)
    }
    case SET_PAYMENT_METHOD:
      return state.setIn(
        ['data', 'token_type'],
        action.method === 2 ? 'stripe' : 'sepa'
      )
    case GET_TOKEN_SLIMPAY_LOADED: {
      return (
        state
          .set('error', false)
          .set('loading', false)
          .set('errorMessage', null)
          .set('data', new TokenModel(action.tokenSlimpay))
          // .set('slimpay_iframe_content', base64.decode(action.iframeContent))
          .set('slimpay_iframe_content', action.iframeContent)
      )
    }
    case GET_TOKEN_SLIMPAY_ERROR:
      return state
        .set('error', true)
        .set('loading', false)
        .set('errorMessage', action.error)
    case GET_TOKEN_SLIMPAY:
      return state
        .set('error', false)
        .set('loading', true)
        .set('errorMessage', null)
    case GET_VALID_TOKEN_SLIMPAY:
      return state
        .set('loading', true)
        .set('error', false)
        .set('errorMessage', null)
    case GET_VALID_TOKEN_SLIMPAY_ERROR:
      return state
        .set('loading', true)
        .set('error', true)
        .set('errorMessage', action.error)
    case GET_VALID_TOKEN_SLIMPAY_LOADED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('errorMessage', null)
        .set('token', new TokenModel(action.tokenSlimpay))
    case NEW_CHECKOUT:
      return initialState
    case NEW_CHECKOUT_TRY:
      return initialState
    default:
      return state
  }
}

export default tokenReducer
