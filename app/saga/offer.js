import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { push } from 'react-router-redux'

import { GET_OFFER, SET_OFFER_PARAMS } from 'actions/constants'
import { getOfferError, getOfferLoaded } from 'actions/offer'
import { nextStep } from 'actions/step'
import { makeSelectOffer } from 'selectors/offer'

function* getOffer() {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/offer`
  const method = 'GET'
  const offer = yield select(makeSelectOffer())

  try {
    if (offer) {
      paramsApiUrl = `${paramsApiUrl}/${offer.data.duration}/${
        offer.data.monthly_price_ttc
      }/${offer.data.is_gift}`
    }
    const offersResponse = yield call(request, paramsApiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(getOfferLoaded(offersResponse.offer))
    yield put(nextStep())
  } catch (err) {
    yield put(getOfferError(err.message))
  }
}

function* redirectCheckout(action) {
  if (action.params.is_gift) {
    yield put(push('/offre'))
  }
  if (!action.params.is_gift) {
    yield put(push('/abonnement'))
  }
}

export default function* sagaOffer() {
  yield takeEvery(GET_OFFER, getOffer)
  yield takeEvery(SET_OFFER_PARAMS, redirectCheckout)
}
