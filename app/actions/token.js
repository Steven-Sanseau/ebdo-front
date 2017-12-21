import {
  POST_TOKEN,
  POST_TOKEN_ERROR,
  POST_TOKEN_LOADED,
  SET_TOKEN_STRIPE,
  SET_TOKEN_STRIPE_ERROR
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

export function setTokenStripe(tokenStripe) {
  return {
    type: SET_TOKEN_STRIPE,
    tokenStripe
  }
}

export function setTokenStripeError(error) {
  return {
    type: SET_TOKEN_STRIPE_ERROR,
    error
  }
}
