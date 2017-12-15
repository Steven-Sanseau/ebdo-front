import { createSelector } from 'reselect'

const selectToken = state => state.get('token')

const makeSelectTokenIsLoading = () =>
  createSelector(selectToken, token => token.get('loading'))

const makeSelectToken = () => createSelector(selectToken, token => token)

export { makeSelectTokenIsLoading, makeSelectToken }
