import {
  POST_TOKEN,
  POST_TOKEN_ERROR,
  POST_TOKEN_LOADED,
  SET_TOKEN_STRIPE,
  SET_TOKEN_STRIPE_ERROR,
  SET_TOKEN_STRIPE_LOADED,
  GET_TOKEN_SLIMPAY_ERROR,
  GET_TOKEN_SLIMPAY_LOADED,
  GET_TOKEN_SLIMPAY,
  GET_VALID_TOKEN_SLIMPAY,
  GET_VALID_TOKEN_SLIMPAY_LOADED,
  GET_VALID_TOKEN_SLIMPAY_ERROR
} from 'actions/constants'
// import { EventTypes } from 'redux-segment'

export function postToken() {
  return {
    type: POST_TOKEN
  }
}

export function postTokenError(error) {
  return {
    type: POST_TOKEN_ERROR,
    error
  }
}

export function postTokenLoaded(token) {
  return {
    type: POST_TOKEN_LOADED,
    token
  }
}

export function getTokenSlimpay() {
  return {
    type: GET_TOKEN_SLIMPAY
  }
}

export function getTokenSlimpayLoaded(tokenSlimpay, iframeContent) {
  return {
    type: GET_TOKEN_SLIMPAY_LOADED,
    tokenSlimpay,
    iframeContent
  }
}

export function getTokenSlimpayError(error) {
  return {
    type: GET_TOKEN_SLIMPAY_ERROR,
    error
  }
}

export function setTokenStripe() {
  return {
    type: SET_TOKEN_STRIPE
  }
}

export function setTokenStripeLoaded(tokenStripe) {
  return {
    type: SET_TOKEN_STRIPE_LOADED,
    tokenStripe
  }
}

export function setTokenStripeError(error) {
  return {
    type: SET_TOKEN_STRIPE_ERROR,
    error
  }
}

export function getValidTokenSlimpay() {
  return {
    type: GET_VALID_TOKEN_SLIMPAY
  }
}

export function getValidTokenSlimpayError(error) {
  return {
    type: GET_VALID_TOKEN_SLIMPAY_ERROR
  }
}

export function getValidTokenSlimpayLoaded(tokenSlimpay) {
  return {
    type: GET_VALID_TOKEN_SLIMPAY_LOADED,
    tokenSlimpay
  }
}
