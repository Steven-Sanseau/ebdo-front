import Immutable from 'immutable'

import { NEXT_STEP, UPDATE_STEP } from 'actions/constants'

const initialState = Immutable.fromJS({
  value: 1
})

function stepReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_STEP: {
      const nextStep = state.get('value') + 1
      return state.set('value', nextStep)
    }
    case UPDATE_STEP:
      return state.set('value', action.step)
    default:
      return state
  }
}

export default stepReducer
