import { call, put, select, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_CLIENT } from 'actions/constants'
import { postClientLoaded, postClientError } from 'actions/client'
import { nextStep } from 'actions/step'

import { makeSelectClientEmail, makeSelectClientId } from 'selectors/client'

function* postClient() {
  let paramsApiUrl = 'http://localhost:1338/v1/client'
  const id = yield select(makeSelectClientId())
  const email = yield select(makeSelectClientEmail())
  let method = 'POST'

  try {
    // WARNING W/ PATCH
    if (id !== null) {
      method = 'PATCH'
      paramsApiUrl = `${paramsApiUrl}/${id}`
    }

    const client = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ client: { email } }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postClientLoaded(client))
    yield put(nextStep())
  } catch (err) {
    yield put(postClientError(err.message))
  }
}

export default function* sagaClient() {
  yield takeLatest(POST_CLIENT, postClient)
}
