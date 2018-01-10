import { call, put, select, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_CLIENT, GET_CLIENT, USE_CLIENT_EXIST } from 'actions/constants'
import {
  postClientLoaded,
  postClientError,
  getClientLoaded,
  getClient,
  getClientError
} from 'actions/client'
import { nextStep } from 'actions/step'
import { loginEmail } from 'actions/login'

import {
  makeSelectClientEmail,
  makeSelectClientId,
  makeSelectClientIsNewClient
} from 'selectors/client'

function* postClient() {
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/client`
  const email = yield select(makeSelectClientEmail())

  const method = 'POST'

  try {
    const clientResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ client: { email } }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    yield put(postClientLoaded(clientResponse.client))
    yield put(nextStep())
  } catch (err) {
    yield put(getClient())
    yield put(postClientError(err.message))
  }
}

function* next() {
  yield put(nextStep())
}

function* getClientApi() {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/client`
  const email = yield select(makeSelectClientEmail())
  const method = 'GET'

  try {
    if (email !== null) {
      paramsApiUrl = `${paramsApiUrl}/${email}`
    }

    const clientResponse = yield call(request, paramsApiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(getClientLoaded(clientResponse.client))
  } catch (err) {
    yield put(getClientError(err.message))
  }
}

export default function* sagaClient() {
  yield takeLatest(USE_CLIENT_EXIST, next)
  yield takeLatest(POST_CLIENT, postClient)
  yield takeLatest(GET_CLIENT, getClientApi)
}
