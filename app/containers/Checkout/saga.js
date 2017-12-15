import { call, put, select, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'
import { POST_CLIENT } from 'containers/Checkout/constants'
import { postClientLoaded, postClientError } from 'containers/Checkout/actions'
import { makeSelectClient } from 'containers/Checkout/selectors'

function* postClient() {
  const paramsApiUrl = 'https://ebdo-api.herokuapp.com/v1/client'
  const email = yield select(makeSelectClient())

  try {
    const client = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ client: { email } }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(postClientLoaded(client))
  } catch (err) {
    yield put(postClientError(err.message))
  }
}

export default function* saga() {
  yield takeLatest(POST_CLIENT, postClient)
}
