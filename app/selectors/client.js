import { createSelector } from 'reselect'

const selectClient = state => state.get('client')

const makeSelectClientEmail = () =>
  createSelector(selectClient, client => client.get('data').get('email'))

const makeSelectClientIsLoading = () =>
  createSelector(selectClient, client => client.get('loading'))

const makeSelectClient = () => createSelector(selectClient, client => client)

export { makeSelectClientEmail, makeSelectClient, makeSelectClientIsLoading }
