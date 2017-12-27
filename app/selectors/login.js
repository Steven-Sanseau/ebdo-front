import { createSelector } from 'reselect'

const selectLogin = state => state.get('login')

const makeSelectLogin = () => createSelector(selectLogin, login => login.toJS())

const makeSelectToken = () =>
  createSelector(selectLogin, login => login.get('token'))

const makeIsLoggedIn = () =>
  createSelector(selectLogin, login => login.get('isUserConnected'))

export { makeSelectToken, makeIsLoggedIn, makeSelectLogin }
