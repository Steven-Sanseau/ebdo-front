import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { push } from 'react-router-redux'

import {
  GET_OFFER,
  SET_OFFER_PARAMS,
  NEW_CHECKOUT,
  SET_COUNTRY_ADRESS,
  SET_PAYMENT_METHOD,
  SET_COUNTRY_ADRESS_OFFER_VALID
} from 'actions/constants'
import { getOfferError, getOfferLoaded } from 'actions/offer'
import { nextStep } from 'actions/step'
import {
  makeSelectOffer,
  makeSelectOfferIsGift,
  makeSelectOfferError
} from 'selectors/offer'

function* getOffer(action) {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/offer`
  const method = 'GET'
  const offer = yield select(makeSelectOffer())

  try {
    if (offer) {
      paramsApiUrl = `${paramsApiUrl}/${offer.data.duration}/${
        offer.data.monthly_price_ttc
      }/${offer.data.is_gift}/${offer.data.country_shipping}/${
        offer.data.payment_method
      }`
    }
    const offersResponse = yield call(request, paramsApiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(getOfferLoaded(offersResponse.offer))
    if (action.type === GET_OFFER) {
      yield put(nextStep())
    }
  } catch (err) {
    yield put(getOfferError(err.message))
  }
}

function* redirectCheckout(action) {
  let route = null
  if (action.isRedirect && action.params) {
    if (action.params.is_gift === true) {
      route = '/offre'
    }
    if (action.params.is_gift === false) {
      route = '/abonnement'
    }
  }

  if (action.type === NEW_CHECKOUT) {
    const isGift = yield select(makeSelectOfferIsGift())
    if (isGift) {
      route = '/offre'
    }
    if (!isGift) {
      route = '/abonnement'
    }
  }

  if (route) {
    yield put(push(route))
  }
}

function* nextStepSaga() {
  const offerError = yield select(makeSelectOfferError())
  if (!offerError) {
    yield put(nextStep())
  }
}

export default function* sagaOffer() {
  yield takeEvery(SET_COUNTRY_ADRESS, getOffer)
  yield takeEvery(SET_PAYMENT_METHOD, getOffer)
  yield takeEvery(GET_OFFER, getOffer)
  yield takeEvery(SET_OFFER_PARAMS, redirectCheckout)
  yield takeEvery(NEW_CHECKOUT, redirectCheckout)
  yield takeEvery(SET_COUNTRY_ADRESS_OFFER_VALID, nextStepSaga)
}
