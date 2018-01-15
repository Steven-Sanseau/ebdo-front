import { LOCATION_CHANGE } from 'react-router-redux'

const routerMiddleware = store => next => action => {
  if (action.type === LOCATION_CHANGE) {
    if (action.payload.pathname === '/') {
      gtag('event', 'conversion', {
        allow_custom_scripts: true,
        send_to: 'DC-8312645/site18/hp18+standard'
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

  if (!action.track) {
    return next(action)
  }

  return next(action)
}

export default routerMiddleware
