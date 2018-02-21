import { EventTypes } from 'redux-segment'
import jwtDecode from 'jwt-decode'

import {
  LOGIN_EMAIL,
  LOGIN_EMAIL_LOADED,
  LOGIN_EMAIL_ERROR,
  LOGIN_EMAIL_CODE,
  LOGIN_EMAIL_CODE_LOADED,
  LOGIN_EMAIL_CODE_ERROR,
  CHANGE_EMAIL_LOGIN,
  LOGOUT
} from './constants'

export function loginEmail(email, redirect) {
  return {
    type: LOGIN_EMAIL,
    email,
    redirect
  }
}

export function changeEmailLogin() {
  return {
    type: CHANGE_EMAIL_LOGIN
  }
}

export function loginEmailLoaded(redirect = true) {
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
    redirect
  }
}

export function loginEmailCodeLoaded(token) {
  const client = jwtDecode(token)

  return {
    type: LOGIN_EMAIL_CODE_LOADED,
    token,
    meta: {
      analytics: {
        eventType: EventTypes.identify,
        eventPayload: {
          event: 'Login',
          userId: client.client_id,
          traits: {
            email: client.email,
            firstName: client.first_name,
            lastName: client.last_name
          }
        }
      }
    }
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
