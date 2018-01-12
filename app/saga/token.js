import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'
import { push } from 'react-router-redux'
import {
  SET_TOKEN_STRIPE_LOADED,
  GET_TOKEN_SLIMPAY,
  SET_PAYMENT_METHOD,
  GET_VALID_TOKEN_SLIMPAY
} from 'actions/constants'
import {
  postToken,
  postTokenLoaded,
  postTokenError,
  getTokenSlimpay,
  getTokenSlimpayError,
  getTokenSlimpayLoaded,
  getValidTokenSlimpayError,
  getValidTokenSlimpayLoaded
} from 'actions/token'
import { nextStep } from 'actions/step'
import { postCheckout } from 'actions/checkout'

import { makeSelectAddressInvoice } from 'selectors/address'
import { makeSelectTokenData } from 'selectors/token'
import { makeSelectOfferData } from 'selectors/offer'
import { makeSelectClientId } from 'selectors/client'

function* postTokenStripeSaga() {
  yield put(postToken())
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/token`
  const token = yield select(makeSelectTokenData())
  const offer = yield select(makeSelectOfferData())
  const clientId = yield select(makeSelectClientId())
  const method = 'POST'

  try {
    const tokenResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ token, offer, client: { client_id: clientId } }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postTokenLoaded(tokenResponse.token))
    yield put(push('/abo/chargement'))
    yield put(postCheckout())
  } catch (err) {
    yield put(postTokenError(err.message))
  }
}

function* getTokenSlimpaySaga() {
  const addressId = yield select(makeSelectAddressInvoice())
  const clientId = yield select(makeSelectClientId())
  const paramsApiUrl = `${
    process.env.EBDO_API_URL
  }/v1/token/slimpay/iframe/${clientId}/${addressId.address_id}`
  const method = 'GET'

  try {
    const tokenResponse = yield call(request, paramsApiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(getTokenSlimpayLoaded(tokenResponse.token, tokenResponse.iframe))
    window.location.href = tokenResponse.iframe.href
  } catch (err) {
    yield put(getTokenSlimpayError(err.message))
  }
}

function* getValidTokenSlimpaySaga() {
  const token = yield select(makeSelectTokenData())

  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/token/slimpay/valid/`
  const method = 'GET'

  try {
    const tokenResponse = yield call(request, paramsApiUrl + token.token_id, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(getValidTokenSlimpayLoaded(tokenResponse.token))
    yield put(push('/abo/chargement'))
    yield put(postCheckout())
  } catch (err) {
    yield put(getValidTokenSlimpayError(err.message))
    yield put(push('/abonnement'))
  }
}

// function* dispatchGetTokenSlimpay(action) {
//   if (action.method === 1) {
//     yield put(getTokenSlimpay())
//   }
// }

export default function* sagaToken() {
  // yield takeEvery(SET_PAYMENT_METHOD, dispatchGetTokenSlimpay)
  yield takeEvery(SET_TOKEN_STRIPE_LOADED, postTokenStripeSaga)
  yield takeEvery(GET_TOKEN_SLIMPAY, getTokenSlimpaySaga)
  yield takeEvery(GET_VALID_TOKEN_SLIMPAY, getValidTokenSlimpaySaga)
}
