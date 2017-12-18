import { createSelector } from 'reselect'

const selectCheckout = state => state.get('checkout')

const makeSelectCheckout = () =>
  createSelector(selectCheckout, selectCheckout => selectCheckout)

export { makeSelectCheckout }
