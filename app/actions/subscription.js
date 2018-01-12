import { EventTypes } from 'redux-segment'
import { GET_SUBSCRIPTIONS_LOADED } from './constants'

export function getSubscriptionsLoaded(subscriptions) {
  return {
    type: GET_SUBSCRIPTIONS_LOADED,
    subscriptions
  }
}
