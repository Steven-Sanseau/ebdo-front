import Immutable from 'immutable'

import { NEXT_STEP, UPDATE_STEP } from 'actions/constants'

const initialState = Immutable.fromJS({})

function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default stepReducer
