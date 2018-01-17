import { LOCATION_CHANGE } from 'react-router-redux'

import { POST_SUBSCRIPTION_LOADED, NEXT_STEP } from 'actions/constants'

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
        send_to: 'DC-8312645/site18/choixabo+standard'
      })
    }

    if (action.payload.pathname === '/source') {
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-8312645/site18/source18+standard'
      })
    }

    if (action.payload.pathname === '/manifeste') {
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

  if (action.type === NEXT_STEP) {
    const path = store.getState().toJS().route.location.pathname
    const currentStep = store.getState().toJS().step.value
    let gtmObject = {
      allow_custom_scripts: true,
      send_to: null
    }

    if (path === '/abonnement') {
      if (currentStep === 1) {
        gtmObject.send_to = 'DC-8312645/site18/delivery+standard'
      }
      if (currentStep === 2) {
        gtmObject.send_to = 'DC-8312645/site18/email+standard'
      }
      if (currentStep === 3) {
        gtmObject.send_to = 'DC-8312645/site18/adresse+standard'
      }
      if (currentStep === 4) {
        gtmObject.send_to = 'DC-8312645/site18/paiement+standard'
      }
    }
    if (path === '/essai') {
      if (currentStep === 1) {
        gtmObject.send_to = 'DC-8312645/site18/confmail+standard'
      }
      if (currentStep === 2) {
        gtmObject.send_to = 'DC-8312645/site18/ebdo-0+standard'
      }
      if (currentStep === 3) {
        gtmObject.send_to = 'DC-8312645/site18/okcgv+standard'
      }
    }

    gtag('event', 'conversion', gtmObject)
  }
  return next(action)
}

export default routerMiddleware
