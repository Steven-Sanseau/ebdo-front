import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import {
  POST_CLIENT,
  GET_CLIENT,
  USE_CLIENT_EXIST,
  GET_CLIENTS_COUNT
} from 'actions/constants'
import {
  getClientCountError,
  getClientCountLoaded,
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

function* postClient(action) {
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
    if (action.checkEmail) {
      yield put(loginEmail(email))
    } else {
      yield put(nextStep())
    }
  } catch (err) {
    yield put(getClient())
    yield put(postClientError(err.message))
  }
}

function* next(action) {
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

function* getClientsCountApi() {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/client/count`
  const method = 'GET'

  try {
    const clientResponse = yield call(request, paramsApiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(getClientCountLoaded(clientResponse.count))
  } catch (err) {
    yield put(getClientCountError(err.message))
  }
}

export default function* sagaClient() {
  yield takeEvery(USE_CLIENT_EXIST, next)
  yield takeEvery(POST_CLIENT, postClient)
  yield takeEvery(GET_CLIENT, getClientApi)
  yield takeLatest(GET_CLIENTS_COUNT, getClientsCountApi)
}
