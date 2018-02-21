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

const makeIsErrorLogin = () =>
  createSelector(selectLogin, login => login.get('error'))

const makeSelectErrorMessage = () =>
  createSelector(selectLogin, login => login.get('errorMessage'))

const makeSelectWaitingForCode = () =>
  createSelector(selectLogin, login => login.get('waitingForCode'))

export {
  makeSelectToken,
  makeIsLoggedIn,
  makeIsErrorLogin,
  makeSelectErrorMessage,
  makeSelectLogin,
  makeSelectWaitingForCode,
  makeIsLoadingLogin
}
