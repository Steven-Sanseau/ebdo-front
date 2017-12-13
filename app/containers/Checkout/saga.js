import { call, put, select, takeLatest } from 'redux-saga/effects'

import { POST_CLIENT } from 'containers/Checkout/constants'
import { postClientLoaded, postClientError } from 'containers/Checkout/actions'
import { makeSelectClient } from 'containers/Checkout/selectors'

import { postRequest } from 'utils/request'

function* postClient() {
  const paramsApiUrl = '/client'
  const email = yield makeSelectClient()
  console.log('email', makeSelectClient())
  try {
    console.log('hellooooo')
    const client = yield call(postRequest, paramsApiUrl, {
      client: { email }
    })
    yield put(postClientLoaded(client))
  } catch (err) {
    yield put(postClientError(err.message))
  }
}

export default function* saga() {
  yield takeLatest(POST_CLIENT, postClient)
}
