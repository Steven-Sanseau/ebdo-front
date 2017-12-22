import {
  POST_SUBSCRIPTION,
  SET_PAYMENT_METHOD,
  SET_CGV_CONFIRM,
  POST_SUBSCRIPTION_LOADED,
  POST_SUBSCRIPTION_ERROR
} from 'actions/constants'

export function setPayementMethod(method) {
  return {
    type: SET_PAYMENT_METHOD,
    method
  }
}

export function setCgvConfirm() {
  return {
    type: SET_CGV_CONFIRM
  }
}

export function postCheckout() {
  return {
    type: POST_SUBSCRIPTION
  }
}
export function postCheckoutLoaded(checkout) {
  return {
    type: POST_SUBSCRIPTION_LOADED,
    checkout
  }
}

export function postCheckoutError(errorMessage, errorCode) {
  return {
    type: POST_SUBSCRIPTION_ERROR,
    errorMessage,
    errorCode
  }
}
