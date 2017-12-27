import Immutable from 'immutable'

import ClientModel from 'models/client'

import {
  POST_CLIENT,
  GET_CLIENT,
  GET_CLIENT_LOADED,
  GET_CLIENT_ERROR,
  SET_CLIENT_EMAIL,
  POST_CLIENT_LOADED,
  POST_CLIENT_ERROR,
  USE_CLIENT_EXIST,
  NEW_CHECKOUT,
  NEW_CHECKOUT_TRY
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: null,
  clientExist: false,
  useClientExist: false,
  isNewClient: false,
  data: new ClientModel()
})

function clientReducer(state = initialState, action) {
  switch (action.type) {
    case POST_CLIENT:
      return state.set('loading', true).set('errorMessage', null)
    case GET_CLIENT:
      return state
        .set('loading', true)
        .set('errorMessage', null)
        .set('isNewClient', false)
    case USE_CLIENT_EXIST:
      return state
        .set('useClientExist', true)
        .set('isNewClient', false)
        .set('loading', false)
    case SET_CLIENT_EMAIL:
      return state
        .setIn(['data', 'email'], action.email)
        .setIn(['data', 'client_id'], null)
        .set('clientExist', false)
        .set('loading', false)
        .set('error', false)
        .set('errorMessage', false)
    case POST_CLIENT_ERROR:
      return state
        .set('loading', false)
        .set('errorMessage', action.errorMessage)
        .set('error', true)
    case GET_CLIENT_ERROR:
      return state
        .set('loading', false)
        .set('errorMessage', action.error)
        .set('error', true)
    case POST_CLIENT_LOADED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('isNewClient', true)
        .set('clientExist', false)
        .set('data', new ClientModel(action.client))
    case GET_CLIENT_LOADED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('isNewClient', false)
        .set('clientExist', true)
        .set('data', new ClientModel(action.client))
    case NEW_CHECKOUT:
      return initialState
    case NEW_CHECKOUT_TRY:
      return initialState
    default:
      return state
  }
}

export default clientReducer
