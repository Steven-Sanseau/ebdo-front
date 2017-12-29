import { EventTypes } from 'redux-segment'

import {
  SET_OFFER_PARAMS,
  GET_OFFER,
  GET_OFFER_LOADED,
  GET_OFFER_ERROR,
  SET_COUNTRY_ADRESS_OFFER_VALID
} from './constants'

export function setOfferParams(params) {
  return {
    type: SET_OFFER_PARAMS,
    params,
    meta: {
      analytics: {
        eventType: EventTypes.track,
        eventPayload: {
          event: SET_OFFER_PARAMS,
          properties: {
            params
          }
        }
      }
    }
  }
}

export function getOfferLoaded(offer) {
  return {
    type: GET_OFFER_LOADED,
    offer
  }
}

export function getOfferError(error) {
  return {
    type: GET_OFFER_ERROR,
    error
  }
}

export function getoffer() {
  return { type: GET_OFFER }
}

export function setCountryAddressOfferValid() {
  return { type: SET_COUNTRY_ADRESS_OFFER_VALID }
}
