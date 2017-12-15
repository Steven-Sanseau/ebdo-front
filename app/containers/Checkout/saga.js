import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'
import { POST_CLIENT, POST_ADRESS } from 'containers/Checkout/constants'
import {
  postClientLoaded,
  postClientError,
  postAdressError,
  postAdressLoaded,
  nextStep
} from 'containers/Checkout/actions'
import {
  makeSelectAdressType,
  makeSelectClientEmail
} from 'containers/Checkout/selectors'

function* postClient() {
  const paramsApiUrl = 'https://ebdo-api.herokuapp.com/v1/client'
  const email = yield select(makeSelectClientEmail())

  try {
    const client = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ client: { email } }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postClientLoaded(client))
  } catch (err) {
    yield put(postClientError(err.message))
  }
}

function* postAdress(action) {
  const paramsApiUrl = 'http://localhost:1338/v1/adress/'
  const adress = yield select(makeSelectAdressType(action.typeOfAdress))

  try {
    const adressResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ adress }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postAdressLoaded(action.typeOfAdress, adressResponse))
    yield put(nextStep())
  } catch (err) {
    yield put(postAdressError(err.message))
  }
}

export default function* saga() {
  yield takeLatest(POST_CLIENT, postClient)
  yield takeEvery(POST_ADRESS, postAdress)
}
