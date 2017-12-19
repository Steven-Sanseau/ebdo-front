import {
  GET_CLIENT,
  GET_CLIENT_LOADED,
  GET_CLIENT_ERROR,
  POST_CLIENT,
  POST_CLIENT_LOADED,
  POST_CLIENT_ERROR,
  SET_CLIENT_EMAIL,
  USE_CLIENT_EXIST
} from './constants'

export function getClient() {
  return {
    type: GET_CLIENT
  }
}

export function useClientExist() {
  return {
    type: USE_CLIENT_EXIST
  }
}

export function getClientLoaded(client) {
  return {
    type: GET_CLIENT_LOADED,
    client
  }
}

export function getClientError(error) {
  return {
    type: GET_CLIENT_ERROR,
    error
  }
}

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

export function postClientError(errorMessage, errorCode) {
  return {
    type: POST_CLIENT_ERROR,
    errorMessage,
    errorCode
  }
}

export function setClientEmail(email) {
  return {
    type: SET_CLIENT_EMAIL,
    email
  }
}
