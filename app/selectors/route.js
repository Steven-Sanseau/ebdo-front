import { createSelector } from 'reselect'

const selectRoute = state => state.get('route')

const makeSelectPathName = () =>
  createSelector(selectRoute, route => route.get('location').get('pathname'))

const makeSelectPath = () =>
  createSelector(selectRoute, route => route.get('location').toJS())

export { makeSelectPathName, makeSelectPath }
