import Immutable from 'immutable'

import Client from 'models/Client'

import {
  POST_CLIENT,
  GET_CLIENT,
  GET_CLIENT_LOADED,
  GET_CLIENT_ERROR,
  SET_CLIENT_EMAIL,
  POST_CLIENT_LOADED,
  POST_CLIENT_ERROR
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: null,
  clientExist: false,
  isNewClient: false,
  data: new Client()
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
    case SET_CLIENT_EMAIL:
      return state
        .setIn(['data', 'email'], action.email)
        .setIn(['data', 'client_id'], null)
        .set('clientExist', false)
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
        .set('data', Client(action.client.client))
    case GET_CLIENT_LOADED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('isNewClient', false)
        .set('clientExist', true)
        .set('data', Client(action.client))
    default:
      return state
  }
}

export default clientReducer
