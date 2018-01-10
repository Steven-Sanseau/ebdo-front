import { EventTypes } from 'redux-segment'
import {
  LOGIN_EMAIL,
  LOGIN_EMAIL_LOADED,
  LOGIN_EMAIL_ERROR,
  LOGIN_EMAIL_CODE,
  LOGIN_EMAIL_CODE_LOADED,
  LOGIN_EMAIL_CODE_ERROR,
  LOGOUT
} from './constants'

export function loginEmail(email, redirect) {
  return {
    type: LOGIN_EMAIL,
    email,
    redirect
  }
}

export function loginEmailLoaded(redirect) {
  return {
    type: LOGIN_EMAIL_LOADED,
    redirect
  }
}

export function loginEmailError(error) {
  return {
    type: LOGIN_EMAIL_ERROR,
    error
  }
}

export function loginEmailCode(
  email,
  code,
  isCheckout = false,
  redirect = '/'
) {
  return {
    type: LOGIN_EMAIL_CODE,
    email,
    code,
    isCheckout,
    redirect,
    meta: {
      analytics: {
        eventType: EventTypes.identify,
        eventPayload: {
          email
        }
      }
    }
  }
}

export function loginEmailCodeLoaded(token) {
  return {
    type: LOGIN_EMAIL_CODE_LOADED,
    token
  }
}

export function loginEmailCodeError(error) {
  return {
    type: LOGIN_EMAIL_CODE_ERROR,
    error
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}
