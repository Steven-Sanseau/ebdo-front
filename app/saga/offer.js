import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { GET_OFFER } from 'actions/constants'
import { getOfferError, getOfferLoaded } from 'actions/offer'
import { makeSelectOffer } from 'selectors/offer'

function* getOffer() {
  let paramsApiUrl = 'http://localhost:1338/v1/offer'
  const method = 'GET'
  const offer = yield select(makeSelectOffer())

  try {
    if (offer) {
      paramsApiUrl = `${paramsApiUrl}/${offer.data.time_limited}/${
        offer.data.monthly_price_ttc
      }/${offer.data.is_gift}`
    }
    const offersResponse = yield call(request, paramsApiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(getOfferLoaded(offersResponse))
  } catch (err) {
    yield put(getOfferError(err.message))
  }
}

export default function* sagaOffer() {
  yield takeEvery(GET_OFFER, getOffer)
}
