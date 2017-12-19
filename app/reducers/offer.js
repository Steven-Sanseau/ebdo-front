import Immutable from 'immutable'
import OfferModel from 'models/offer'

import {
  GET_OFFERS_LIST,
  GET_OFFERS_LOADED,
  GET_OFFERS_ERROR
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: '',
  data: Immutable.List()
})

function offerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OFFERS_LIST: {
      return state
        .set('loading', true)
        .set('errorMessage', '')
        .set('error', false)
    }
    case GET_OFFERS_LOADED:
      const offersList = action.payload.data.map(entry => {
        OfferModel(entry)
      })
      return state
        .set('loading', false)
        .set('data', List(offersList))
        .set('error', false)
    case GET_OFFERS_ERROR:
      return state.set('error', true).set('errorMessage', error.message)
    default:
      return state
  }
}

export default stepReducer
