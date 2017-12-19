import {
  GET_OFFERS_LIST,
  GET_OFFERS_LOADED,
  GET_OFFERS_ERROR
} from './constants'

export function getOffersList() {
  return {
    type: GET_OFFERS_LIST
  }
}

export function getOffersLoaded(offers) {
  return {
    type: GET_OFFERS_LOADED,
    offers
  }
}

export function getOffersError(error) {
  return {
    type: GET_OFFERS_ERROR,
    error
  }
}

export function postoffer() {
  return { type: POST_OFFER }
}
