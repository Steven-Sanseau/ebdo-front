import { call, put, select, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_GODSON_CLIENT, GET_GODSON_CLIENT, USE_GODSON_CLIENT_EXIST } from 'actions/constants'
import {
  postGodsonLoaded,
  postGodsonError,
  getGodsonLoaded,
  getGodson,
  getGodsonError
} from 'actions/godson'
import { nextStep } from 'actions/step'

import {
  makeSelectGodsonEmail,
} from '../selectors/godson'

function* postGodson() {
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/client`
  const email = yield select(makeSelectGodsonEmail())

  const method = 'POST'

  try {
    const clientResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ client: { email, is_godson: true } }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    yield put(postGodsonLoaded(clientResponse.client))
    yield put(nextStep())
  } catch (err) {
    yield put(getGodson()) // TODO Vérifier que le godson n'a pas d'abonnement actif
    yield put(postGodsonError(err.message))
  }
}

function* next() {
  yield put(nextStep())
}

function* getGodsonApi() {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/client`
  const email = yield select(makeSelectGodsonEmail())
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
    yield put(getGodsonLoaded(clientResponse.client))
  } catch (err) {
    yield put(getGodsonError(err.message))
  }
}

export default function* sagaGodson() {
  yield takeLatest(USE_GODSON_CLIENT_EXIST, next)
  yield takeLatest(POST_GODSON_CLIENT, postGodson)
  yield takeLatest(GET_GODSON_CLIENT, getGodsonApi)
}
