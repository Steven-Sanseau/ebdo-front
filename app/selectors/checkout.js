import { createSelector } from 'reselect'

const selectCheckout = state => state.get('checkout')

const makeSelectCheckout = () =>
  createSelector(selectCheckout, checkout => checkout.toJS())

const makeSelectCheckoutData = () =>
  createSelector(selectCheckout, checkout => checkout.get('data').toJS())

const makeSelectIsCheckoutLoading = () =>
  createSelector(selectCheckout, checkout => checkout.get('loading'))

const makeSelectPayementMethod = () =>
  createSelector(selectCheckout, checkout =>
    checkout.get('data').get('payment_method')
  )
const makeSelectCheckoutMessageError = () =>
  createSelector(selectCheckout, checkout =>
    checkout.get('data').get('errorMessage')
  )

const makeSelectIsCGVChecked = () =>
  createSelector(selectCheckout, checkout =>
    checkout.get('data').get('cgv_accepted')
  )

export {
  makeSelectCheckout,
  makeSelectCheckoutMessageError,
  makeSelectIsCheckoutLoading,
  makeSelectCheckoutData,
  makeSelectPayementMethod,
  makeSelectIsCGVChecked
}
