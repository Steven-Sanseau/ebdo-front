import { combineReducers } from 'redux-immutable'
import addressReducer from 'reducers/address'
import checkoutReducer from 'reducers/checkout'
import clientReducer from 'reducers/client'
import offerReducer from 'reducers/offer'
import routeReducer from 'reducers/routes'
import stepReducer from 'reducers/step'
import tokenReducer from 'reducers/token'

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    address: addressReducer,
    checkout: checkoutReducer,
    client: clientReducer,
    offer: offerReducer,
    route: routeReducer,
    step: stepReducer,
    token: tokenReducer,
    ...injectedReducers
  })
}
