import { createSelector } from 'reselect'

const selectSubscription = state => state.get('subscription')

const makeSelectSubscriptionData = () =>
  createSelector(selectSubscription, subscription => subscription.get('data').toJS())

export {
  makeSelectSubscriptionData
}
