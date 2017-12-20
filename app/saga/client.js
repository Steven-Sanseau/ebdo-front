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

import {
  makeSelectClientEmail,
  makeSelectClientId,
  makeSelectClientIsNewClient
} from 'selectors/client'

function* postClient() {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/client`
  const id = yield select(makeSelectClientId())
  const email = yield select(makeSelectClientEmail())
  const isNewClient = yield select(makeSelectClientIsNewClient())
  let method = 'POST'

  try {
    // WARNING W/ PATCH
    if (id !== null) {
      method = 'PATCH'
      paramsApiUrl = `${paramsApiUrl}/${id}`

      if (!isNewClient) {
        throw new Error({ error: { message: "You can't update client" } })
      }
    }

    const client = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ client: { email } }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postClientLoaded(client))
  } catch (err) {
    yield put(getClient())
    yield put(postClientError(err))
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
    // WARNING W/ PATCH
    if (email !== null) {
      paramsApiUrl = `${paramsApiUrl}/${email}`
    }

    const client = yield call(request, paramsApiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(getClientLoaded(client))
    // yield put(nextStep())
  } catch (err) {
    yield put(getClientError(err.message))
  }
}

export default function* sagaClient() {
  yield takeLatest(USE_CLIENT_EXIST, next)
  yield takeLatest(POST_CLIENT, postClient)
  yield takeLatest(GET_CLIENT, getClientApi)
}
