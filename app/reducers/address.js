import Immutable from 'immutable'

import Address from 'models/address'

import {
  POST_ADDRESS,
  POST_ADDRESS_LOADED,
  POST_ADDRESS_ERROR,
  SET_ADDRESS,
  SET_ADDRESS_EQUAL,
  SET_COUNTRY_ADDRESS,
  NEW_CHECKOUT,
  NEW_CHECKOUT_TRY,
  POST_CLIENT_LOADED,
  GET_ADDRESS,
  GET_ADDRESS_ERROR,
  GET_ADDRESS_LOADED
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: null,
  isEditableAddress: true,
  country: {
    value: 'FR',
    label: 'France'
  },
  delivery: new Address(),
  invoice: new Address()
})

function addressReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ADDRESS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('errorMessage', '')
    case SET_ADDRESS: {
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
        .setIn(['invoice', 'address_equal'], false)
        .setIn(['delivery', 'address_equal'], false)
    }
    case POST_ADDRESS_ERROR: {
      if (action.error.response.status === 404) {
        state.setIn([action.payload.typeOfAddress, 'address_id'], null)
      }

      return state
        .set('loading', false)
        .set('errorMessage', action.error.message)
        .set('error', true)
    }
    case POST_ADDRESS_LOADED: {
      return state
        .set('loading', false)
        .set('error', false)
        .set('errorMessage', '')
        .set(action.payload.typeOfAddress, new Address(action.payload.address))
    }
    case SET_ADDRESS_EQUAL: {
      const addressInvoiceToDelivery = state.get('invoice')
      const newAddressDelivery = addressInvoiceToDelivery
        .mergeDeep({ type_address: 'delivery' })
        .mergeDeep({ address_id: state.getIn(['delivery', 'address_id']) })
        .mergeDeep({ address_equal: true })

      return state
        .set('delivery', new Address(newAddressDelivery))
        .setIn(['invoice', 'address_equal'], true)
    }
    case SET_COUNTRY_ADDRESS: {
      return state
        .set('loading', false)
        .set('error', false)
        .set('country', Immutable.fromJS(action.payload.country))
    }
    case GET_ADDRESS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('errorMessage', null)
    case GET_ADDRESS_LOADED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('isEditableAddress', false)
        .set(action.payload.typeOfAddress, new Address(action.payload.address))
    case GET_ADDRESS_ERROR:
      return state
        .set('loading', false)
        .set('error', true)
        .set('errorMessage', action.error)
    case POST_CLIENT_LOADED:
      return state.set('delivery', new Address()).set('invoice', new Address())
    case NEW_CHECKOUT:
      return initialState
    case NEW_CHECKOUT_TRY:
      return initialState
    default:
      return state
  }
}

export default addressReducer
