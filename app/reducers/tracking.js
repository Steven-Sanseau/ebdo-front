import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  utm_source: null,
  utm_medium: null
})

function trackingReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default trackingReducer
