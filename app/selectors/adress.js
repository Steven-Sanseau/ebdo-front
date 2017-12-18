import { createSelector } from 'reselect'

const selectAdress = state => state.get('adress')

const makeSelectAdress = () => createSelector(selectAdress, adress => adress)

const makeSelectAdressIsLoading = () =>
  createSelector(selectAdress, adress => adress.get('loading'))

const makeSelectAdressDelivery = () =>
  createSelector(selectAdress, adress => adress.get('delivery'))

const makeSelectAdressInvoice = () =>
  createSelector(selectAdress, adress => adress.get('invoice'))

const makeSelectAdressId = () =>
  createSelector(selectAdress, adress => adress.get('invoice'))

const makeSelectAdressType = type =>
  createSelector(selectAdress, adress => adress.get(type))

const makeSelectAdressCountry = () =>
  createSelector(selectAdress, adress => adress.get('country').toJS())

export {
  makeSelectAdress,
  makeSelectAdressId,
  makeSelectAdressCountry,
  makeSelectAdressDelivery,
  makeSelectAdressInvoice,
  makeSelectAdressIsLoading,
  makeSelectAdressType
}
