import { call, put, select, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'
import { push } from 'react-router-redux'
import {
  POST_SUBSCRIPTION,
  NEW_CHECKOUT,
  NEW_CHECKOUT_TRY
} from 'actions/constants'
import {
  postCheckoutLoaded,
  postCheckoutError,
  newCheckout
} from 'actions/checkout'
import { getAddress } from 'actions/address'
import { getOfferLoaded } from 'actions/offer'
import { goToStep } from 'actions/step'
import { makeIsLoggedIn } from 'selectors/login'
import { makeSelectClientId } from 'selectors/client'

import { makeSelectCheckoutData } from 'selectors/checkout'

function* postCheckout() {
  const isLoggedIn = yield select(makeIsLoggedIn())
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/checkout`
  const checkout = yield select(makeSelectCheckoutData())
  const method = 'POST'

  if (isLoggedIn) {
    checkout.client_id = yield select(makeSelectClientId())
  }

  try {
    const checkoutResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ checkout }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postCheckoutLoaded(checkoutResponse.checkout))
    yield put(newCheckout())
    yield put(push('/abo/merci'))
  } catch (err) {
    yield put(postCheckoutError(err.message))
    yield put(push('/abo/erreur'))
  }
}

function* newCheckoutSaga(action) {
  const isLoggedIn = yield select(makeIsLoggedIn())

  if (isLoggedIn) {
    yield put(getAddress('invoice', action.type))

    if (action.type === NEW_CHECKOUT_TRY) {
      yield put(goToStep(3))
    }
  } else {
    yield put(goToStep(1))
  }

  if (action.type === NEW_CHECKOUT_TRY) {
    yield put(
      getOfferLoaded(
        {
          offer_id: 81 // TODO Use aboweb id instead ?
        },
        false
      )
    )
  }
}

export default function* sagaCheckout() {
  yield takeLatest(POST_SUBSCRIPTION, postCheckout)
  yield takeLatest(NEW_CHECKOUT_TRY, newCheckoutSaga)
  yield takeLatest(NEW_CHECKOUT, newCheckoutSaga)
}
