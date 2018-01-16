import { SET_TRACKER } from 'actions/constants'

export function setTracker(tracker) {
  return {
    type: SET_TRACKER,
    tracker
  }
}
