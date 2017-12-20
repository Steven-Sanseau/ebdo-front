import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_ADRESS } from 'actions/constants'
import { postAddressError, postAddressLoaded } from 'actions/address'
import { nextStep } from 'actions/step'

import { makeSelectAddressType } from 'selectors/address'

function* postAddress(action) {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/address`
  const address = yield select(makeSelectAddressType(action.typeOfAddress))
  let method = 'POST'

  try {
    if (address.address_id !== null) {
      method = 'PATCH'
      paramsApiUrl = `${paramsApiUrl}/${address.address_id}`
    }

    const addressResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ address }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postAddressLoaded(action.typeOfAddress, addressResponse))

    if (action.typeOfAddress === 'invoice') {
      yield put(nextStep())
    }
  } catch (err) {
    yield put(postAddressError(err.message))
  }
}

export default function* sagaAddress() {
  yield takeEvery(POST_ADRESS, postAddress)
}
