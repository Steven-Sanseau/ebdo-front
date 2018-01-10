import { combineReducers } from 'redux-immutable'
import addressReducer from 'reducers/address'
import checkoutReducer from 'reducers/checkout'
import clientReducer from 'reducers/client'
import godsonReducer from 'reducers/godson'
import offerReducer from 'reducers/offer'
import newsletterReducer from 'reducers/newsletter'
import routeReducer from 'reducers/routes'
import stepReducer from 'reducers/step'
import tokenReducer from 'reducers/token'
import loginReducer from 'reducers/login'
import subscriptionReducer from 'reducers/subscription'

export default function createReducer(injectedReducers) {
  return combineReducers({
    address: addressReducer,
    checkout: checkoutReducer,
    client: clientReducer,
    godson: godsonReducer,
    offer: offerReducer,
    newsletter: newsletterReducer,
    route: routeReducer,
    step: stepReducer,
    token: tokenReducer,
    login: loginReducer,
    subscription: subscriptionReducer,
    ...injectedReducers
  })
}
