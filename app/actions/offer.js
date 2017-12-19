import {
  SET_OFFER_PARAMS,
  // GET_OFFERS_LIST,
  // GET_OFFERS_LOADED,
  // GET_OFFERS_ERROR,
  GET_OFFER
} from './constants'

export function setOfferParams(params) {
  return {
    type: SET_OFFER_PARAMS,
    params
  }
}

// export function getOffersList() {
//   return {
//     type: GET_OFFERS_LIST
//   }
// }
//
// export function getOffersLoaded(offers) {
//   return {
//     type: GET_OFFERS_LOADED,
//     offers
//   }
// }
//
// export function getOffersError(error) {
//   return {
//     type: GET_OFFERS_ERROR,
//     error
//   }
// }

export function getoffer() {
  return { type: GET_OFFER }
}
