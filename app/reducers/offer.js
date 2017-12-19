import Immutable from 'immutable'

import OfferModel from 'models/Offer'

import {
  SET_OFFER_PARAMS
  // GET_OFFERS_LIST,
  // GET_OFFERS_LOADED,
  // GET_OFFERS_ERROR
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
      return state.set('data', newOffer)
    }
    // case GET_OFFERS_LIST: {
    //   return state
    //     .set('loading', true)
    //     .set('errorMessage', '')
    //     .set('error', false)
    // }
    // case GET_OFFERS_LOADED: {
    //   const offersList = action.offers.data.map(entry => new OfferModel(entry))
    //   return state
    //     .set('loading', false)
    //     .set('data', Immutable.List(offersList))
    //     .set('error', false)
    // }
    // case GET_OFFERS_ERROR:
    //   return state
    //     .set('error', true)
    //     .set('errorMessage', action.payload.error.message)
    default:
      return state
  }
}

export default offerReducer
