import Immutable from 'immutable'

import Adress from 'models/Adress'

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
  delivery: new Adress(),
  invoice: new Adress()
})

function adressReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ADRESS:
      return state.set('loading', true)
    case SET_ADRESS: {
      const newAdress = state
        .get(action.payload.typeOfAdress)
        .mergeDeep(action.payload.adress)
      const country = state.getIn(['country', 'value'])

      return state
        .set(action.payload.typeOfAdress, Adress(newAdress))
        .setIn(
          [action.payload.typeOfAdress, 'type_adress'],
          action.payload.typeOfAdress
        )
        .setIn([action.payload.typeOfAdress, 'country'], country)
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
        .set(action.payload.typeOfAdress, Adress(action.payload.adress))
    }
    case SET_ADRESS_EQUAL: {
      const adressDeliveryToInvoice = state
        .get('delivery')
        .mergeDeep({ type_adress: 'invoice' })
      return state.set('invoice', new Adress(adressDeliveryToInvoice))
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

export default adressReducer
