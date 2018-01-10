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
import { makeSelectGodsonId } from 'selectors/godson'
import { makeSelectToken } from 'selectors/login'

function* postAddress(action) {
  let paramsApiUrl = `${process.env.EBDO_API_URL}/v1/address`
  const address = yield select(makeSelectAddressType(action.typeOfAddress))
  const clientId = action.isOffer
    ? yield select(makeSelectGodsonId())
    : yield select(makeSelectClientId())
  let method = 'POST'
  let Authorization = null
  try {
    if (address.address_id !== null) {
      method = 'PATCH'
      paramsApiUrl = `${paramsApiUrl}/${action.addressId}`
      const token = yield select(makeSelectToken())
      Authorization = `Bearer ${token}`
    }

    const addressResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ address, client: { client_id: clientId } }),
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization
      }
    })

    yield put(postAddressLoaded(action.typeOfAddress, addressResponse.address))

    if (action.typeOfAddress === 'invoice' && action.redirect) {
      yield put(nextStep())
    }
  } catch (err) {
    yield put(
      postAddressError(
        err.message,
        err.statusCode || null,
        action.typeOfAddress
      )
    )
  }
}

function* getAddress(action) {
  const token = yield select(makeSelectToken())
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/address/${
    action.typeOfAddress
  }`
  const method = 'GET'

  try {
    const addressResponse = yield call(request, paramsApiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    yield put(getAddressLoaded(action.typeOfAddress, addressResponse.address))
  } catch (err) {
    yield put(getAddressError(err, action.typeOfAddress))
  }
}

export default function* sagaAddress() {
  yield takeEvery(POST_ADDRESS, postAddress)
  yield takeEvery(GET_ADDRESS, getAddress)
}
