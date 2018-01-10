import { createSelector } from 'reselect'

const selectClient = state => state.get('client')

const makeSelectClientEmail = () =>
  createSelector(selectClient, client => client.get('data').get('email'))

const makeSelectClientCount = () =>
  createSelector(selectClient, client => client.get('clientsCount'))

const makeSelectClientId = () =>
  createSelector(selectClient, client => client.get('data').get('client_id'))

const makeSelectClientIsLoading = () =>
  createSelector(selectClient, client => client.get('loading'))

const makeSelectClientIsNewClient = () =>
  createSelector(selectClient, client => client.get('isNewClient'))

const makeSelectClientExist = () =>
  createSelector(selectClient, client => client.get('clientExist'))

const makeSelectClient = () =>
  createSelector(selectClient, client => client.toJS())

export {
  makeSelectClientEmail,
  makeSelectClientCount,
  makeSelectClientIsNewClient,
  makeSelectClientExist,
  makeSelectClientId,
  makeSelectClient,
  makeSelectClientIsLoading
}
