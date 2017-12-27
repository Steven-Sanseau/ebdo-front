import { createSelector } from 'reselect'

const selectStep = state => state.get('login')

const makeSelectToken = () =>
  createSelector(selectStep, step => step.get('token'))

const makeIsLoggedIn = () =>
  createSelector(selectStep, step => step.get('isUserConnected'))

export { makeSelectToken, makeIsLoggedIn }
