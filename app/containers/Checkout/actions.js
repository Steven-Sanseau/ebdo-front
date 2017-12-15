import {
  NEXT_STEP,
  UPDATE_STEP,
  POST_CLIENT,
  POST_CLIENT_LOADED,
  SET_CLIENT_EMAIL,
  POST_CLIENT_ERROR
} from './constants'

export function nextStep() {
  return {
    type: NEXT_STEP
  }
}

export function goToStep(step) {
  return {
    type: UPDATE_STEP,
    step
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
