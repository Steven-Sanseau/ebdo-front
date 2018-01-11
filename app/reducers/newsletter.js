import Immutable from 'immutable'

import {
  POST_NEWSLETTER_ERROR,
  POST_NEWSLETTER_SUCCESS
} from '../actions/constants'

const initialState = Immutable.fromJS({
  // loading: false,
  error: false,
  errorMessage: null,
  isNewsletterPost: false
})

function newsletterReducer(state = initialState, action) {
  switch (action.type) {
    case POST_NEWSLETTER_SUCCESS:
      return state.set('isNewsletterPost', true)
        .set('error', false)
        .set('errorMessage', null)
    case POST_NEWSLETTER_ERROR:
      return state.set('error', action.error)
    default:
      return state
  }
}

export default newsletterReducer
