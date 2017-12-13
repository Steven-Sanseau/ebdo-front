import Immutable from 'immutable'
import {
  POST_CLIENT,
  SET_CLIENT_EMAIL,
  POST_CLIENT_LOADED,
  POST_CLIENT_ERROR
} from './constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: null,
  client: {}
})

function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case POST_CLIENT:
      return state.set('loading', true)
    case SET_CLIENT_EMAIL:
      return state.set('client', { email: action.email })
    case POST_CLIENT_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error.response.data.message)
    case POST_CLIENT_LOADED:
      return state
        .set('loading', false)
        .set('error', null)
        .set('data', action.client)
    default:
      return state
  }
}

export default checkoutReducer
