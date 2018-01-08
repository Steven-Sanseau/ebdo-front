import { fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

// Initial routing state
const routeInitialState = fromJS({
  location: null
})

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload
      })
    default:
      return state
  }
}

export default routeReducer
