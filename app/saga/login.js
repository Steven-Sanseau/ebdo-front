import { call, put, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'
import { LOGIN_EMAIL, LOGIN_EMAIL_CODE, LOGOUT } from '../actions/constants'
import {
  loginEmailSuccess,
  loginEmailError,
  loginEmailCodeSuccess,
  loginEmailCodeError
} from '../actions/login'
import { nextStep } from '../actions/step'
import { newCheckout } from '../actions/checkout'
import { getSubscriptionsLoaded } from '../actions/subscription'
import { push } from 'react-router-redux'

function* loginEmailSaga(action) {
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/login/code/${
    action.email
  }`

  try {
    yield call(request, paramsApiUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    yield put(loginEmailSuccess())
  } catch (err) {
    yield put(loginEmailError(err.message))
  }
}

function* loginEmailCodeSaga(action) {
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/login/${action.code}/${
    action.email
  }`

  try {
    const response = yield call(request, paramsApiUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    yield put(loginEmailCodeSuccess(response.token))

    if (action.isCheckout) {
      const subscriptions = yield call(
        request,
        `${process.env.EBDO_API_URL}/v1/subscription`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${response.token}`
          }
        }
      )
      yield put(getSubscriptionsLoaded(subscriptions.subscriptions))

      // If user already has a valid subscription we redirect him to an error page with some information about his subscription
      if (subscriptions.subscriptions.length > 0) {
        let redirect = false
        subscriptions.subscriptions.map(subscription => {
          if (subscription.status === '01') {
            redirect = true
          }
        })

        if (redirect) {
          yield put(push('/abo/existe'))
        }
      }

      // yield put(nextStep())
    } else {
      yield put(push(action.redirect))
    }
  } catch (err) {
    yield put(loginEmailCodeError(err.message))
  }
}

function* logoutSaga() {}

export default function* sagaLogin() {
  yield takeEvery(LOGIN_EMAIL, loginEmailSaga)
  yield takeEvery(LOGOUT, logoutSaga)
  yield takeEvery(LOGIN_EMAIL_CODE, loginEmailCodeSaga)
}
