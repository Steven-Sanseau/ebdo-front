import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects'

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
import { logout } from 'actions/login'

import { makeSelectTokenData } from 'selectors/token'
import { makeSelectOfferData } from 'selectors/offer'
import { makeIsLoggedIn } from 'selectors/login'
import { makeSelectClient, makeSelectClientId } from 'selectors/client'
import {
  makeSelectAddressInvoice,
  makeSelectAddressDelivery
} from 'selectors/address'

import { makeSelectCheckoutData } from 'selectors/checkout'

function* postCheckout() {
  const isLoggedIn = yield select(makeIsLoggedIn())
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/checkout`
  const addressInvoice = yield select(makeSelectAddressInvoice())
  const addressDelivery = yield select(makeSelectAddressDelivery())
  const checkout = yield select(makeSelectCheckoutData())
  const client = yield select(makeSelectClient())
  const token = yield select(makeSelectTokenData())
  const offer = yield select(makeSelectOfferData())

  const method = 'POST'

  if (isLoggedIn) {
    checkout.client_id = yield select(makeSelectClientId())
  }

  try {
    const checkoutResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({
        checkout,
        addressInvoice,
        addressDelivery,
        client,
        token,
        offer
      }),
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(
      postCheckoutLoaded(checkoutResponse.checkout, checkoutResponse.offer)
    )
    yield put(newCheckout())
    yield put(push('/abo/merci'))
    yield put(logout())
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
          aboweb_id: 'F-EB-GRABW-000-1-DD',
          offer_id: 1
        },
        false
      )
    )
  }
}

export default function* sagaCheckout() {
  yield takeLatest(POST_SUBSCRIPTION, postCheckout)
  yield takeEvery(NEW_CHECKOUT_TRY, newCheckoutSaga)
  yield takeEvery(NEW_CHECKOUT, newCheckoutSaga)
}
