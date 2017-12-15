import { call, put, select, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'
import { POST_CLIENT, POST_ADRESS } from 'containers/Checkout/constants'
import { postClientLoaded, postClientError } from 'containers/Checkout/actions'
import {
  makeSelectAdress,
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

function* postAdress() {
  const paramsApiUrl = 'https://ebdo-api.herokuapp.com/v1/adress'
  const adress = yield select(makeSelectAdress())

  try {
    const client = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ adress: { adress } }),
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

export default function* saga() {
  yield takeLatest(POST_CLIENT, postClient)
  yield takeLatest(POST_ADRESS, postAdress)
}
