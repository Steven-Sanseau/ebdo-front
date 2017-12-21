import { createSelector } from 'reselect'

const selectToken = state => state.get('token')

const makeSelectTokenIsLoading = () =>
  createSelector(selectToken, token => token.get('loading'))

const makeSelectToken = () => createSelector(selectToken, token => token.toJS())

const makeSelectTokenIsSetError = () =>
  createSelector(selectToken, token => token.get('error'))

const makeSelectTokenMessageError = () =>
  createSelector(selectToken, token => token.get('errorMessage'))

export {
  makeSelectTokenIsLoading,
  makeSelectToken,
  makeSelectTokenIsSetError,
  makeSelectTokenMessageError
}
