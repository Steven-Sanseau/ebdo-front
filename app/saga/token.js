import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { SET_TOKEN_STRIPE_LOADED } from 'actions/constants'
import { postToken, postTokenLoaded, postTokenError } from 'actions/token'
import { nextStep } from 'actions/step'

import { makeSelectTokenData } from 'selectors/token'
import { makeSelectOfferData } from 'selectors/offer'
import { makeSelectClientId } from 'selectors/client'

function* postTokenSaga() {
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
    yield put(nextStep())
  } catch (err) {
    yield put(postTokenError(err.message))
  }
}

export default function* sagaToken() {
  yield takeEvery(SET_TOKEN_STRIPE_LOADED, postTokenSaga)
}
