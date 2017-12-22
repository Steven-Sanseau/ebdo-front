import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_ADRESS } from 'actions/constants'
import { postAddressError, postAddressLoaded } from 'actions/address'
import { nextStep } from 'actions/step'

import { makeSelectAddressType } from 'selectors/address'
import { makeSelectClientId } from 'selectors/client'

function* postAddress(action) {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/address`
  const address = yield select(makeSelectAddressType(action.typeOfAddress))
  const clientId = yield select(makeSelectClientId())
  let method = 'POST'

  try {
    if (address.address_id !== null) {
      method = 'PATCH'
      paramsApiUrl = `${paramsApiUrl}/${address.address_id}`
    }

    const addressResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ address, client: { client_id: clientId } }),
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    yield put(postAddressLoaded(action.typeOfAddress, addressResponse.address))

    if (action.typeOfAddress === 'invoice') {
      yield put(nextStep())
    }
  } catch (err) {
    yield put(postAddressError(err, action.typeOfAddress))
  }
}

export default function* sagaAddress() {
  yield takeEvery(POST_ADRESS, postAddress)
}
