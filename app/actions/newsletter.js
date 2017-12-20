import { CHANGE_NEWSLETTER_STATUS } from './constants'

export function changeNewsletterStatus(status) {
  return {
    type: CHANGE_NEWSLETTER_STATUS,
    status
  }
}
