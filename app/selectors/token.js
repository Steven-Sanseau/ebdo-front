import { createSelector } from 'reselect'

const selectToken = state => state.get('token')

const makeSelectTokenIsLoading = () =>
  createSelector(selectToken, token => token.get('loading'))

const makeSelectToken = () => createSelector(selectToken, token => token.toJS())

const makeSelectTokenData = () =>
  createSelector(selectToken, token => token.get('data').toJS())

const makeSelectTokenIsSetError = () =>
  createSelector(selectToken, token => token.get('error'))

const makeSelectTokenMessageError = () =>
  createSelector(selectToken, token => token.get('errorMessage'))

export {
  makeSelectTokenData,
  makeSelectTokenIsLoading,
  makeSelectToken,
  makeSelectTokenIsSetError,
  makeSelectTokenMessageError
}
