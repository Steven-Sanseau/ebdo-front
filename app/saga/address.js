import { call, put, select, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_ADDRESS, GET_ADDRESS, NEW_CHECKOUT_TRY } from 'actions/constants'
import {
  postAddressError,
  postAddressLoaded,
  getAddressError,
  getAddressLoaded
} from 'actions/address'
import { nextStep } from 'actions/step'

import { makeSelectAddressType } from 'selectors/address'
import { makeSelectClientId } from 'selectors/client'
import { makeSelectToken } from 'selectors/login'

function* postAddress(action) {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/address`
  const address = yield select(makeSelectAddressType(action.typeOfAddress))
  const clientId = yield select(makeSelectClientId())
  let method = 'POST'

  try {
    if (action.addressId !== null) {
      method = 'PATCH'
      paramsApiUrl = `${paramsApiUrl}/${action.addressId}`
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

function* getAddress(action) {
  const token = yield select(makeSelectToken())
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/address/${
    action.typeOfAddress
  }`
  let method = 'GET'

  try {
    const addressResponse = yield call(request, paramsApiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    yield put(getAddressLoaded(action.typeOfAddress, addressResponse.address))
    if (action.requestAction === NEW_CHECKOUT_TRY) {
      yield put(nextStep())
    }
  } catch (err) {
    yield put(getAddressError(err, action.typeOfAddress))
  }
}

export default function* sagaAddress() {
  yield takeEvery(POST_ADDRESS, postAddress)
  yield takeEvery(GET_ADDRESS, getAddress)
}
