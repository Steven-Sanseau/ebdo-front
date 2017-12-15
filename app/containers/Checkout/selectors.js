import { createSelector } from 'reselect'

const selectCheckout = state => state.get('checkout')

const selectClient = state => state.get('checkout').get('client')

const selectAdress = state => state.get('checkout').get('adress')

const makeSelectCheckout = () =>
  createSelector(selectCheckout, globalState => globalState.get('checkout'))

const makeSelectClientEmail = () =>
  createSelector(selectClient, client => client.get('data').get('email'))

const makeSelectAdress = () => createSelector(selectAdress, adress => adress)

const makeSelectStep = () =>
  createSelector(selectCheckout, checkout => checkout.get('step'))

const makeSelectClientIsLoading = () =>
  createSelector(selectClient, client => client.get('loading'))

const makeSelectClient = () => createSelector(selectClient, client => client)

export {
  makeSelectCheckout,
  makeSelectClientEmail,
  makeSelectClient,
  makeSelectClientIsLoading,
  makeSelectStep,
  makeSelectAdress
}
