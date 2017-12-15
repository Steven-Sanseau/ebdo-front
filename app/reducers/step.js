import Immutable from 'immutable'

import { NEXT_STEP, UPDATE_STEP } from 'actions/constants'

const initialState = Immutable.fromJS({
  step: 4
})

function stepReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_STEP: {
      const nextStep = state.get('step') + 1
      return state.set('step', nextStep)
    }
    case UPDATE_STEP:
      return state.set('step', action.step)
    default:
      return state
  }
}

export default stepReducer
