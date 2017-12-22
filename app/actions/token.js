import {
  POST_TOKEN,
  POST_TOKEN_ERROR,
  POST_TOKEN_LOADED,
  SET_TOKEN_STRIPE,
  SET_TOKEN_STRIPE_ERROR,
  SET_TOKEN_STRIPE_LOADED
} from 'actions/constants'

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
