import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_TOKEN, SET_TOKEN_STRIPE } from 'actions/constants'
import { postTokenLoaded, postTokenError } from 'actions/token'
import { nextStep } from 'actions/step'

import { makeSelectToken } from 'selectors/token'

function* postToken() {
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/token`
  const token = yield select(makeSelectToken())
  const method = 'POST'

  try {
    const tokenResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ token }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postTokenLoaded(tokenResponse))
    yield put(nextStep())
  } catch (err) {
    yield put(postTokenError(err.message))
  }
}

export default function* sagaToken() {
  yield takeEvery(POST_TOKEN, postToken)
  yield takeEvery(SET_TOKEN_STRIPE, postToken)
}
