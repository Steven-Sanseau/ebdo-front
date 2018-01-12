import { EventTypes } from 'redux-segment'
import {
  GET_GODSON_CLIENT,
  GET_GODSON_CLIENT_LOADED,
  GET_GODSON_CLIENT_ERROR,
  POST_GODSON_CLIENT,
  POST_GODSON_CLIENT_LOADED,
  POST_GODSON_CLIENT_ERROR,
  SET_GODSON_CLIENT_EMAIL,
  USE_GODSON_CLIENT_EXIST
} from './constants'

export function getGodson() {
  return {
    type: GET_GODSON_CLIENT
  }
}

export function useGodsonExist() {
  return {
    type: USE_GODSON_CLIENT_EXIST
  }
}

export function getGodsonLoaded(client) {
  return {
    type: GET_GODSON_CLIENT_LOADED,
    client
  }
}

export function getGodsonError(error) {
  return {
    type: GET_GODSON_CLIENT_ERROR,
    error
  }
}

export function postGodson() {
  return {
    type: POST_GODSON_CLIENT
  }
}

export function postGodsonLoaded(client) {
  return {
    type: POST_GODSON_CLIENT_LOADED,
    client
  }
}

export function postGodsonError(errorMessage) {
  return {
    type: POST_GODSON_CLIENT_ERROR,
    errorMessage
  }
}

export function setGodsonEmail(email) {
  return {
    type: SET_GODSON_CLIENT_EMAIL,
    email
  }
}
