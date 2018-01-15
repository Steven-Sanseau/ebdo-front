import { EventTypes } from 'redux-segment'
import {
  POST_NEWSLETTER,
  POST_NEWSLETTER_SUCCESS,
  POST_NEWSLETTER_ERROR
} from './constants'

export function postNewsletter(newsletter) {
  return {
    type: POST_NEWSLETTER,
    newsletter
  }
}

export function postNewsletterSuccess(newsletter) {
  return {
    type: POST_NEWSLETTER_SUCCESS,
    newsletter,
    meta: {
      analytics: {
        eventType: EventTypes.track,
        eventPayload: {
          event: 'New Mail Newsletter',
          properties: {
            email: newsletter.email,
            name: newsletter.name
          }
        }
      }
    }
  }
}

export function postNewsletterError(error) {
  return {
    type: POST_NEWSLETTER_ERROR,
    error
  }
}
