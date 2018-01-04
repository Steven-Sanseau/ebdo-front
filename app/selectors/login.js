import { createSelector } from 'reselect'

const selectLogin = state => state.get('login')

const makeSelectLogin = () => createSelector(selectLogin, login => login.toJS())

const makeSelectToken = () =>
  createSelector(selectLogin, login => login.get('token'))

const makeIsLoggedIn = () =>
  createSelector(
    selectLogin,
    login => login.get('isUserConnected') && login.get('token') !== null
  )

const makeIsLoadingLogin = () =>
  createSelector(selectLogin, login => login.get('loading'))

const makeSelectWaitingForCode = () =>
  createSelector(selectLogin, login => login.get('waitingForCode'))

export {
  makeSelectToken,
  makeIsLoggedIn,
  makeSelectLogin,
  makeSelectWaitingForCode,
  makeIsLoadingLogin
}
