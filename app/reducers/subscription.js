import Immutable from 'immutable'

import SubscriptionModel from '../models/subscription'

import {
  GET_SUBSCRIPTIONS_LOADED, LOGOUT,
} from '../actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: '',
  data: []
})

function subscriptionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUBSCRIPTIONS_LOADED:
      return state
        .set('loading', false)
        .set('data', Immutable.List(action.subscriptions.map(subscription => SubscriptionModel(subscription))))
        .set('error', false)
        .set('errorMessage', '')
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default subscriptionReducer
