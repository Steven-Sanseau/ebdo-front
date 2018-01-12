import { EventTypes } from 'redux-segment'
import {
  GET_CLIENTS_COUNT_LOADED,
  GET_CLIENTS_COUNT_ERROR,
  GET_CLIENTS_COUNT,
  GET_CLIENT,
  GET_CLIENT_LOADED,
  GET_CLIENT_ERROR,
  POST_CLIENT,
  POST_CLIENT_LOADED,
  POST_CLIENT_ERROR,
  SET_CLIENT_EMAIL,
  USE_CLIENT_EXIST
} from './constants'

export function getClientCountLoaded(clientsCount) {
  return {
    type: GET_CLIENTS_COUNT_LOADED,
    clientsCount
  }
}

export function getClientCountError(error) {
  return {
    type: GET_CLIENTS_COUNT_ERROR,
    error
  }
}
export function getClientsCount() {
  return {
    type: GET_CLIENTS_COUNT
  }
}

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

export function postClient(checkEmail = false) {
  return {
    type: POST_CLIENT,
    checkEmail
  }
}

export function postClientLoaded(client) {
  return {
    type: POST_CLIENT_LOADED,
    client
  }
}

export function postClientError(errorMessage) {
  return {
    type: POST_CLIENT_ERROR,
    errorMessage
  }
}

export function setClientEmail(email) {
  return {
    type: SET_CLIENT_EMAIL,
    email
  }
}
