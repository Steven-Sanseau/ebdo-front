import { LOCATION_CHANGE } from 'react-router-redux'

import { POST_SUBSCRIPTION_LOADED } from 'actions/constants'

const routerMiddleware = store => next => action => {
  if (action.type === LOCATION_CHANGE) {
    if (action.payload.pathname === '/') {
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-8312645/site18/hp18+standard'
      })
    }

    if (action.payload.pathname === '/essai') {
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-8312645/site18/essai+standard'
      })
    }

    if (action.payload.pathname === '/abonnement') {
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-8312645/site18/abonnement+standard'
      })
    }

    if (action.payload.pathname === '/source') {
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-8312645/site18/source18+standard'
      })
    }

    if (action.payload.pathname === '/manifest') {
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-8312645/site18/pourquoi+standard'
      })
    }

    if (action.payload.pathname === '/equipe') {
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-8312645/site18/equipe18+standard'
      })
    }
    return next(action)
  }

  if (action.track) {
    let gtmObject = {
      allow_custom_scripts: true,
      send_to: action.track.code
    }
    if (action.track.value) {
      gtmObject.value = action.track.value
    }

    if (action.track.transaction_id) {
      gtmObject.transaction_id = action.track.transaction_id
    }

    gtag('event', 'conversion', gtmObject)

    return next(action)
  }

  return next(action)
}

export default routerMiddleware
