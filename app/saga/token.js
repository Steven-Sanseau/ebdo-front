import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_ADRESS } from 'actions/constants'
import { postAdressError, postAdressLoaded } from 'actions/adress'
import { nextStep } from 'actions/step'

import { makeSelectAdressType } from 'selectors/adress'

function* postToken(action) {
  let paramsApiUrl = 'http://localhost:1338/v1/adress'
  const adress = yield select(makeSelectAdressType(action.typeOfAdress))
  let method = 'POST'

  try {
    // WARNING W/ PATCH
    if (adress.adress_id !== null) {
      method = 'PATCH'
      paramsApiUrl = `${paramsApiUrl}/${adress.adress_id}`
    }

    const adressResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ adress }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postAdressLoaded(action.typeOfAdress, adressResponse))
    yield put(nextStep())
  } catch (err) {
    yield put(postAdressError(err.message))
  }
}

export default function* sagaToken() {
  yield takeEvery(POST_ADRESS, postToken)
}
