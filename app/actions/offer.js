import { SET_OFFER, UPDATE_STEP } from 'actions/constants'

export function nextStep() {
  return {
    type: NEXT_STEP
  }
}

export function goToStep(step) {
  return {
    type: UPDATE_STEP,
    step
  }
}
