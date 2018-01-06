import { EventTypes } from 'redux-segment'
import {
  LOGIN_EMAIL,
  LOGIN_EMAIL_SUCCESS,
  LOGIN_EMAIL_ERROR,
  LOGIN_EMAIL_CODE,
  LOGIN_EMAIL_CODE_SUCCESS,
  LOGIN_EMAIL_CODE_ERROR,
  LOGOUT
} from './constants'

export function loginEmail(email) {
  return {
    type: LOGIN_EMAIL,
    email
  }
}

export function loginEmailSuccess() {
  return {
    type: LOGIN_EMAIL_SUCCESS
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
  console.log('action', redirect)
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

export function loginEmailCodeSuccess(token) {
  return {
    type: LOGIN_EMAIL_CODE_SUCCESS,
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
