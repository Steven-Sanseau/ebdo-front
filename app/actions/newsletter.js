import { POST_NEWSLETTER, POST_NEWSLETTER_SUCCESS, POST_NEWSLETTER_ERROR } from './constants'

export function postNewsletter(newsletter) {
  return {
    type: POST_NEWSLETTER,
    newsletter
  }
}

export function postNewsletterSuccess() {
  return {
    type: POST_NEWSLETTER_SUCCESS
  }
}

export function postNewsletterError(error) {
  return {
    type: POST_NEWSLETTER_ERROR,
    error
  }
}