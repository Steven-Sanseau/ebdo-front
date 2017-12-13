import {
  POST_CLIENT,
  POST_CLIENT_LOADED,
  SET_CLIENT_EMAIL,
  POST_CLIENT_ERROR
} from './constants'

export function postClient() {
  return {
    type: POST_CLIENT
  }
}

export function postClientLoaded(client) {
  return {
    type: POST_CLIENT_LOADED,
    client
  }
}

export function postClientError(error) {
  return {
    type: POST_CLIENT_ERROR,
    error
  }
}

export function setClientEmail(email) {
  return {
    type: SET_CLIENT_EMAIL,
    email
  }
}
