import Immutable from 'immutable'

import CheckoutModel from 'models/checkout'

import {
  SET_PAYMENT_METHOD,
  POST_CLIENT_LOADED,
  GET_OFFER_LOADED,
  POST_TOKEN_LOADED,
  POST_ADRESS_LOADED,
  GET_CLIENT_LOADED
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: null,
  data: new CheckoutModel()
})

function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAYMENT_METHOD:
      return state.setIn(['data', 'payment_method'], action.method)
    case GET_CLIENT_LOADED:
      return state.setIn(['data', 'client_id'], action.client.client_id)
    case POST_CLIENT_LOADED:
      return state.setIn(['data', 'client_id'], action.client.client_id)
    case GET_OFFER_LOADED:
      return state.setIn(['data', 'offer_id'], action.offer.offer_id)
    case POST_TOKEN_LOADED:
      return state.setIn(['data', 'token_id'], action.token.token_id)
    case POST_ADRESS_LOADED:
      return state.setIn(
        ['data', `address_${action.payload.typeOfAddress}_id`],
        action.payload.address.address.address_id
      )
    default:
      return state
  }
}

export default checkoutReducer
