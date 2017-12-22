import { call, put, select, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_SUBSCRIPTION } from 'actions/constants'
import { postCheckoutLoaded, postCheckoutError } from 'actions/checkout'
import { nextStep } from 'actions/step'

import { makeSelectAddressType } from 'selectors/address'

function* postCheckout(action) {
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/checkout`
  const checkout = yield select(makeSelectAddressType(action.typeOfAddress))
  const method = 'POST'

  try {
    const checkoutResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ checkout }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postCheckoutLoaded(checkoutResponse))
    yield put(nextStep())
  } catch (err) {
    yield put(postCheckoutError(err.message))
  }
}

export default function* sagaCheckout() {
  yield takeLatest(POST_SUBSCRIPTION, postCheckout)
}
