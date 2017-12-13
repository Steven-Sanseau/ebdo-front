import { createSelector } from 'reselect'

/**
 * Direct selector to the checkout state domain
 */
const selectGlobal = state => state.get('global')

const selectCheckout = state => state.get('checkout')

const selectClient = state => state.get('checkout').get('client')

/**
 * Other specific selectors
 */

/**
 * Default selector used by Checkout
 */

const makeSelectCheckout = () =>
  createSelector(selectCheckout, globalState => globalState.get('checkout'))

const makeSelectClient = () =>
  createSelector(selectClient, selectClient => selectClient.email)

export { makeSelectCheckout, makeSelectClient, selectClient }
