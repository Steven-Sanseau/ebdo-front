import { createSelector } from 'reselect'

const selectOffer = state => state.get('offer')

const makeSelectOffer = () => createSelector(selectOffer, offer => offer)

const makeSelectOffers = () =>
  createSelector(selectOffer, offer => offer.get('data'))

const makeSelectOffersIsLoading = () =>
  createSelector(selectOffer, offer => offer.get('loading'))

export { makeSelectOffer, makeSelectOffers, makeSelectOffersIsLoading }
