import Immutable from 'immutable'

import CheckoutModel from 'models/checkout'

import { SET_PAYMENT_METHOD } from 'actions/constants'

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
    default:
      return state
  }
}

export default checkoutReducer
