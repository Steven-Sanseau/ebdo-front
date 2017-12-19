import { createSelector } from 'reselect'

const selectOffer = state => state.get('offer')

const makeSelectOffer = () => createSelector(selectOffer, offer => offer.toJS())

const makeSelectOfferData = () =>
  createSelector(selectOffer, offer => offer.get('data'))

const makeSelectOffersIsLoading = () =>
  createSelector(selectOffer, offer => offer.get('loading'))

const makeSelectOfferError = () =>
  createSelector(selectOffer, offer => offer.get('error'))

const makeSelectOfferErrorMessage = () =>
  createSelector(selectOffer, offer => offer.get('errorMessage'))

export {
  makeSelectOffer,
  makeSelectOfferData,
  makeSelectOffersIsLoading,
  makeSelectOfferErrorMessage,
  makeSelectOfferError
}
