import { POST_SUBSCRIPTION, SET_PAYMENT_METHOD } from 'actions/constants'

export function confirmCheckout() {
  return {
    type: POST_SUBSCRIPTION
  }
}

export function setPayementMethod(method) {
  return {
    type: SET_PAYMENT_METHOD,
    method
  }
}
