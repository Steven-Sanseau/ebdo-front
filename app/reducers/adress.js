import Immutable from 'immutable'

import Adress from 'models/Adress'

import {
  POST_ADRESS,
  POST_ADRESS_LOADED,
  POST_ADRESS_ERROR,
  SET_ADRESS,
  SET_ADRESS_EQUAL
} from 'actions/constants'

const initialState = Immutable.fromJS({
  loading: false,
  error: false,
  errorMessage: null,
  delivery: new Adress(),
  invoice: new Adress()
})

function adressReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ADRESS:
      return state.setIn(['adress', 'loading'], true)
    case SET_ADRESS: {
      const newAdress = state
        .getIn(['adress', action.payload.typeOfAdress])
        .mergeDeep(action.payload.adress)
      return state
        .setIn(['adress', action.payload.typeOfAdress], Adress(newAdress))
        .setIn(
          ['adress', action.payload.typeOfAdress, 'type_adress'],
          action.payload.typeOfAdress
        )
    }
    case POST_ADRESS_ERROR:
      return state
        .setIn(['adress', 'loading'], false)
        .setIn(['adress', 'errorMessage'], action.error)
        .setIn(['adress', 'error'], true)
    case POST_ADRESS_LOADED: {
      return state
        .setIn(['adress', 'loading'], false)
        .setIn(['adress', 'error'], false)
        .setIn(
          ['adress', action.payload.typeOfAdress],
          Adress(action.payload.adress)
        )
    }
    case SET_ADRESS_EQUAL: {
      const adressDeliveryToInvoice = state
        .getIn(['adress', 'delivery'])
        .mergeDeep({ type_adress: 'invoice' })
      return state.setIn(
        ['adress', 'invoice'],
        new Adress(adressDeliveryToInvoice)
      )
    }
    default:
      return state
  }
}

export default adressReducer
