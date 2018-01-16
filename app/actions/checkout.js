import { EventTypes } from 'redux-segment'
import {
  POST_SUBSCRIPTION,
  SET_PAYMENT_METHOD,
  SET_CGV_CONFIRM,
  POST_SUBSCRIPTION_LOADED,
  POST_SUBSCRIPTION_ERROR,
  NEW_CHECKOUT,
  NEW_CHECKOUT_TRY
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
export function postCheckoutLoaded(checkout, offer) {
  let track = {}
  let meta = {}

  if (offer.is_free_gift) {
    track = {
      code: 'DC-8312645/aboebdo1/typage+transactions',
      transaction_id: checkout.checkout_id,
      value: 'gift'
    }
  } else if (offer.time_limited) {
    track = {
      code: 'DC-8312645/aboebdo1/typage+transactions',
      transaction_id: checkout.checkout_id,
      value: offer.price_ttc / 100
    }

    meta = {
      analytics: [
        {
          eventType: EventTypes.track,
          eventPayload: {
            event: '',
            properties: {
              orderId: checkout.checkout_id,
              total: offer.price_ttc / 100,
              revenue: offer.price_ttc / 100,
              currency: '€',
              description: offer.description
            }
          }
        }
      ]
    }
  } else if (!offer.time_limited) {
    track = {
      code: 'DC-8312645/aboebdo1/typage+transactions',
      transaction_id: checkout.checkout_id,
      value: offer.price_ttc / 100
    }

    meta = {
      analytics: [
        {
          eventType: EventTypes.track,
          eventPayload: {
            event: 'Completed Subscribe',
            properties: {
              orderId: checkout.checkout_id,
              total: offer.price_ttc / 100,
              revenue: offer.price_ttc / 100,
              currency: '€',
              description: offer.description
            }
          }
        }
      ]
    }
  }
  return {
    type: POST_SUBSCRIPTION_LOADED,
    checkout,
    track,
    meta
  }
}

export function postCheckoutError(errorMessage, errorCode) {
  return {
    type: POST_SUBSCRIPTION_ERROR,
    errorMessage,
    errorCode
  }
}

export function newCheckout(isHomeRedirect = false) {
  return {
    type: NEW_CHECKOUT,
    isHomeRedirect
  }
}

export function newCheckoutTry(isHomeRedirect = false) {
  return {
    type: NEW_CHECKOUT_TRY,
    isHomeRedirect
  }
}
