import { createSelector } from 'reselect'

const selectClient = state => state.get('client')

const makeSelectClientEmail = () =>
  createSelector(selectClient, client => client.get('data').get('email'))

const makeSelectClientId = () =>
  createSelector(
    selectClient,
    client => client.get('data').get('client_id') || null
  )

const makeSelectClientIsLoading = () =>
  createSelector(selectClient, client => client.get('loading'))

const makeSelectClientIsNewClient = () =>
  createSelector(selectClient, client => client.get('isNewClient'))

const makeSelectClientExist = () =>
  createSelector(selectClient, client => client.get('clientExist'))

const makeSelectClient = () => createSelector(selectClient, client => client)

export {
  makeSelectClientEmail,
  makeSelectClientIsNewClient,
  makeSelectClientExist,
  makeSelectClientId,
  makeSelectClient,
  makeSelectClientIsLoading
}
