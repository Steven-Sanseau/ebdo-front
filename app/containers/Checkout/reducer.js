import Immutable from 'immutable'
import Client from 'models/Client'

import {
  POST_CLIENT,
  SET_CLIENT_EMAIL,
  POST_CLIENT_LOADED,
  POST_CLIENT_ERROR
} from './constants'

const initialState = Immutable.fromJS({
  client: Immutable.Map({
    loading: false,
    error: false,
    errorMessage: null,
    data: new Client()
  }),
  offer: Immutable.Map({}),
  adress: Immutable.Map({
    delivery: {},
    invoice: {}
  }),
  token: {}
})

function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case POST_CLIENT:
      return state.setIn(['client', 'loading'], true)
    case SET_CLIENT_EMAIL:
      return state.setIn(['client', 'data', 'email'], action.email)

    case POST_CLIENT_ERROR:
      return state
        .setIn(['client', 'loading'], true)
        .setIn(['client', 'errorMessage'], action.error)
        .setIn(['client', 'error'], true)
    case POST_CLIENT_LOADED:
      return state
        .setIn(['client', 'loading'], false)
        .setIn(['client', 'error'], false)
        .setIn(['client', 'data'], Client(action.client))
    default:
      return state
  }
}

export default checkoutReducer
