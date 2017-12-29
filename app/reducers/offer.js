import Immutable from 'immutable'

import OfferModel from 'models/offer'

import {
  SET_OFFER_PARAMS,
  GET_OFFER,
  GET_OFFER_LOADED,
  GET_OFFER_ERROR,
  SET_COUNTRY_ADRESS,
  SET_PAYMENT_METHOD,
  NEW_CHECKOUT,
  NEW_CHECKOUT_TRY
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
    case SET_COUNTRY_ADRESS: {
      return state.setIn(
        ['data', 'country_shipping'],
        action.payload.country.value
      )
    }
    case GET_OFFER:
      return state
        .set('loading', true)
        .set('errorMessage', '')
        .set('error', false)
    case SET_PAYMENT_METHOD:
      return state.setIn(['data', 'payment_method'], action.method)
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
    case NEW_CHECKOUT: {
      const country = initialState.getIn(['data', 'country_shipping'])
      return state.setIn(['data', 'country_shipping'], country)
    }
    case NEW_CHECKOUT_TRY: {
      const country = initialState.getIn(['data', 'country_shipping'])
      return state.setIn(['data', 'country_shipping'], country)
    }
    default:
      return state
  }
}

export default offerReducer
