import { EventTypes } from 'redux-segment'

import {
  SET_OFFER_PARAMS,
  GET_OFFER,
  GET_OFFER_LOADED,
  GET_OFFER_ERROR,
  SET_COUNTRY_ADDRESS_OFFER_VALID
} from './constants'

export function setOfferParams(params, isRedirect) {
  return {
    type: SET_OFFER_PARAMS,
    params,
    isRedirect
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
  return { type: SET_COUNTRY_ADDRESS_OFFER_VALID }
}
