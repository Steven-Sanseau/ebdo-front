import { call, put, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { GET_OFFERS_LIST } from 'actions/constants'
import { getOffersLoaded, getOffersError } from 'actions/offer'

function* getOffers() {
  const paramsApiUrl = 'http://localhost:1338/v1/offer'
  const method = 'GET'

  try {
    const offersResponse = yield call(request, paramsApiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(getOffersLoaded(offersResponse))
  } catch (err) {
    yield put(getOffersError(err.message))
  }
}

export default function* sagaAdress() {
  yield takeEvery(GET_OFFERS_LIST, getOffers)
}
