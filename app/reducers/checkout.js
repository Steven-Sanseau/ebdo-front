import Immutable from 'immutable'

import CheckoutModel from 'models/checkout'

import {
  SET_PAYMENT_METHOD,
  SET_CGV_CONFIRM,
  POST_CLIENT_LOADED,
  GET_OFFER_LOADED,
  POST_TOKEN_LOADED,
  GET_VALID_TOKEN_SLIMPAY_LOADED,
  POST_ADDRESS_LOADED,
  GET_TOKEN_SLIMPAY_LOADED,
  GET_CLIENT_LOADED,
  POST_SUBSCRIPTION,
  POST_SUBSCRIPTION_LOADED,
  POST_SUBSCRIPTION_ERROR,
  NEW_CHECKOUT,
  NEW_CHECKOUT_TRY
} from 'actions/constants'
import jwtDecode from 'jwt-decode'
import { LOGIN_EMAIL_CODE_SUCCESS } from '../actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: null,
  data: new CheckoutModel()
})

function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CGV_CONFIRM: {
      const isCheck = state.getIn(['data', 'cgv_accepted'])
      return state.setIn(['data', 'cgv_accepted'], !isCheck)
    }
    case SET_PAYMENT_METHOD:
      return state.setIn(['data', 'payment_method'], action.method)
    case POST_SUBSCRIPTION:
      return state
        .set('loading', true)
        .set('error', false)
        .set('errorMessage')
    case POST_SUBSCRIPTION_LOADED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', new CheckoutModel(action.checkout))
    case POST_SUBSCRIPTION_ERROR:
      return state
        .set('loading', false)
        .set('error', true)
        .set('errorMessage', action.error)
    case NEW_CHECKOUT:
      return initialState
    case NEW_CHECKOUT_TRY:
      return initialState
    default:
      return state
  }
}

export default checkoutReducer
