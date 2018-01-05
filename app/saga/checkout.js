import { call, put, select, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'
import { push } from 'react-router-redux'
import { POST_SUBSCRIPTION } from 'actions/constants'
import { postCheckoutLoaded, postCheckoutError } from 'actions/checkout'

import { makeSelectCheckoutData } from 'selectors/checkout'

function* postCheckout() {
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/checkout`
  const checkout = yield select(makeSelectCheckoutData())
  const method = 'POST'

  try {
    const checkoutResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ checkout }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postCheckoutLoaded(checkoutResponse.checkout))
    yield put(push('/abo/merci'))
  } catch (err) {
    yield put(postCheckoutError(err.message))
  }
}

export default function* sagaCheckout() {
  yield takeLatest(POST_SUBSCRIPTION, postCheckout)
}
