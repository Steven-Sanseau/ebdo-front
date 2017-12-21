import {
  POST_SUBSCRIPTION,
  SET_PAYMENT_METHOD,
  SET_CGV_CONFIRM
} from 'actions/constants'

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

export function setCgvConfirm(isCheck) {
  return {
    type: SET_CGV_CONFIRM,
    isCheck
  }
}
