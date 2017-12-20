import Immutable from 'immutable'

import OfferModel from 'models/offer'

import {
  SET_OFFER_PARAMS,
  GET_OFFER,
  GET_OFFER_LOADED,
  GET_OFFER_ERROR
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: '',
  data: new OfferModel()
})

function offerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OFFER_PARAMS: {
      const newOffer = state.get('data').mergeDeep(action.params)
      return state
        .set('data', newOffer)
        .set('error', false)
        .set('errorMessage', '')
    }
    case GET_OFFER:
      return state
        .set('loading', true)
        .set('errorMessage', '')
        .set('error', false)
    case GET_OFFER_LOADED:
      return state
        .set('loading', false)
        .set('data', OfferModel(action.offer))
        .set('error', false)
        .set('errorMessage', '')
    case GET_OFFER_ERROR:
      return state
        .set('error', true)
        .set('errorMessage', action.error)
        .set('loading', false)
    default:
      return state
  }
}

export default offerReducer
