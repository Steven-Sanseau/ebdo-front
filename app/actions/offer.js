import {
  SET_OFFER_PARAMS,
  GET_OFFER,
  GET_OFFER_LOADED,
  GET_OFFER_ERROR
} from './constants'

export function setOfferParams(params) {
  return {
    type: SET_OFFER_PARAMS,
    params
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
