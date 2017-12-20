import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_ADRESS } from 'actions/constants'
import { postAddressError, postAddressLoaded } from 'actions/address'
import { nextStep } from 'actions/step'

import { makeSelectAddressType } from 'selectors/address'

function* postCheckout(action) {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/checkout`
  const address = yield select(makeSelectAddressType(action.typeOfAddress))
  let method = 'POST'

  try {
    // WARNING W/ PATCH
    if (address.address_id !== null) {
      method = 'PATCH'
      paramsApiUrl = `${paramsApiUrl}/${address.address_id}`
    }

    const addressResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ address }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postAddressLoaded(action.typeOfAddress, addressResponse))
    yield put(nextStep())
  } catch (err) {
    yield put(postAddressError(err.message))
  }
}

function* getCheckout() {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/checkout`
  const cookie = yield select(makeSelectCookieCheckout())
  const method = 'GET'

  try {
    if (cookie !== null) {
      paramsApiUrl = `${paramsApiUrl}/${cookie_id}`
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

export default function* sagaCheckout() {
  yield takeEvery(POST_ADRESS, postCheckout)
}
