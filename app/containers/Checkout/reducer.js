import Immutable from 'immutable'
import _ from 'lodash'

import Adress from 'models/Adress'
import Client from 'models/Client'

import {
  NEXT_STEP,
  UPDATE_STEP,
  POST_CLIENT,
  SET_CLIENT_EMAIL,
  POST_CLIENT_LOADED,
  POST_CLIENT_ERROR,
  POST_ADRESS,
  POST_ADRESS_LOADED,
  POST_ADRESS_ERROR,
  SET_ADRESS,
  SET_ADRESS_EQUAL
} from './constants'

const initialState = Immutable.fromJS({
  client: Immutable.Map({
    loading: false,
    error: false,
    errorMessage: null,
    data: new Client()
  }),
  offer: Immutable.Map({}),
  adress: Immutable.Map({
    loading: false,
    error: false,
    errorMessage: null,
    delivery: new Adress(),
    invoice: new Adress()
  }),
  token: {},
  step: 3
})

function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_STEP: {
      const nextStep = state.get('step') + 1
      return state.set('step', nextStep)
    }
    case UPDATE_STEP:
      return state.set('step', action.step)
    case POST_CLIENT:
      return state.setIn(['client', 'loading'], true)
    case SET_CLIENT_EMAIL:
      return state.setIn(['client', 'data', 'email'], action.email)

    case POST_CLIENT_ERROR:
      return state
        .setIn(['client', 'loading'], false)
        .setIn(['client', 'errorMessage'], action.error)
        .setIn(['client', 'error'], true)
    case POST_CLIENT_LOADED:
      return state
        .setIn(['client', 'loading'], false)
        .setIn(['client', 'error'], false)
        .setIn(['client', 'data'], Client(action.client))
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
    case POST_ADRESS_LOADED:
      return state
        .setIn(['adress', 'loading'], false)
        .setIn(['adress', 'error'], false)
        .setIn(
          ['adress', action.payload.typeOfAdress],
          Adress(action.payload.adress)
        )
    case SET_ADRESS_EQUAL: {
      const adressDelivery = state.getIn(['adress', 'delivery'])
      return state.setIn(['adress', 'invoice'], new Adress(adressDelivery))
    }
    default:
      return state
  }
}

export default checkoutReducer
