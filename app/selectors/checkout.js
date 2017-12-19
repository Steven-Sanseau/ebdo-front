import { createSelector } from 'reselect'

const selectCheckout = state => state.get('checkout')

const makeSelectCheckout = () =>
  createSelector(selectCheckout, checkout => checkout.toJS())

const makeSelectPayementMethod = () =>
  createSelector(
    selectCheckout,
    checkout => checkout.get('data').payment_method
  )

export { makeSelectCheckout, makeSelectPayementMethod }
