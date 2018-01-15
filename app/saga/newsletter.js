import { call, put, takeEvery } from 'redux-saga/effects'

import request from 'utils/request'

import { POST_NEWSLETTER } from '../actions/constants'
import {
  postNewsletterSuccess,
  postNewsletterError
} from '../actions/newsletter'

function* postNewsletterSaga(action) {
  const paramsApiUrl = `${process.env.EBDO_API_URL}/v1/newsletter`
  const method = 'POST'
  const { email } = action.newsletter
  const name = action.newsletter.firstname

  try {
    const newsletterResponse = yield call(request, paramsApiUrl, {
      body: JSON.stringify({ newsletter: { email, name } }),
      method,
      headers: { 'Content-Type': 'application/json' }
    })
    yield put(postNewsletterSuccess(newsletterResponse.newsletter))
  } catch (err) {
    yield put(postNewsletterError(err.message))
  }
}

export default function* sagaNewsletter() {
  yield takeEvery(POST_NEWSLETTER, postNewsletterSaga)
}
