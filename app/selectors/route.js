import { createSelector } from 'reselect'

const selectRoute = state => state.get('route')

const makeSelectPathName = () =>
  createSelector(selectRoute, route => route.get('location').get('pathname'))

export { makeSelectPathName }
