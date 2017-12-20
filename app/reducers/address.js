import Immutable from 'immutable'

import Address from 'models/address'

import {
  POST_ADRESS,
  POST_ADRESS_LOADED,
  POST_ADRESS_ERROR,
  SET_ADRESS,
  SET_ADRESS_EQUAL,
  SET_COUNTRY_ADRESS
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: null,
  country: {
    value: 'FR',
    label: 'France'
  },
  delivery: new Address(),
  invoice: new Address()
})

function addressReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ADRESS:
      return state.set('loading', true)
    case SET_ADRESS: {
      const newAddress = state
        .get(action.payload.typeOfAddress)
        .mergeDeep(action.payload.address)
      const country = state.getIn(['country', 'value'])

      return state
        .set(action.payload.typeOfAddress, Address(newAddress))
        .setIn(
          [action.payload.typeOfAddress, 'type_address'],
          action.payload.typeOfAddress
        )
        .setIn([action.payload.typeOfAddress, 'country'], country)
    }
    case POST_ADRESS_ERROR:
      return state
        .set('loading', false)
        .set('errorMessage', action.error)
        .set('error', true)
    case POST_ADRESS_LOADED: {
      return state
        .set('loading', false)
        .set('error', false)
        .set(
          action.payload.typeOfAddress,
          Address(action.payload.address.address)
        )
    }
    case SET_ADRESS_EQUAL: {
      const addressDeliveryToInvoice = state
        .get('delivery')
        .mergeDeep({ type_address: 'invoice' })
      return state.set('invoice', new Address(addressDeliveryToInvoice))
    }
    case SET_COUNTRY_ADRESS: {
      return state
        .set('loading', false)
        .set('error', false)
        .set('country', Immutable.fromJS(action.payload.country))
    }
    default:
      return state
  }
}

export default addressReducer
