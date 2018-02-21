import { call, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import request from 'utils/request'
import {
  LOGIN_EMAIL,
  LOGIN_EMAIL_CODE,
  LOGIN_EMAIL_LOADED,
  LOGOUT
} from 'actions/constants'
import {
  loginEmailLoaded,
  loginEmailError,
  loginEmailCodeLoaded,
  loginEmailCodeError
} from 'actions/login'
import { nextStep } from 'actions/step'
import { getAddress } from 'actions/address'
import { newCheckout } from 'actions/checkout'
import { getSubscriptionsLoaded } from 'actions/subscription'

function* loginEmailSaga(action) {
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/login/code/${
    action.email
  }`

  try {
    yield call(request, paramsApiUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    yield put(loginEmailLoaded(action.redirect))
  } catch (err) {
    yield put(loginEmailError(err.response))
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
    yield put(loginEmailCodeLoaded(response.token))

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
          if (subscription.aboweb_offer_id.indexOf('DL') !== -1) {
            redirect = true
          }
        })

        if (redirect) {
          yield put(push('/abo/existe'))
        }
      }
      yield put(getAddress('invoice'))
      yield put(getAddress('delivery'))
    } else if (action.redirect) {
      yield put(push(action.redirect))
    }
  } catch (err) {
    yield put(loginEmailCodeError(err.message))
  }
}

function* logoutSaga() {}

function* loginEmailNextStep(action) {
  if (action.redirect) {
    yield put(nextStep())
  }
}

export default function* sagaLogin() {
  yield takeEvery(LOGIN_EMAIL, loginEmailSaga)
  yield takeEvery(LOGIN_EMAIL_LOADED, loginEmailNextStep)
  yield takeEvery(LOGOUT, logoutSaga)
  yield takeEvery(LOGIN_EMAIL_CODE, loginEmailCodeSaga)
}
