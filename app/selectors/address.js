import { createSelector } from 'reselect'

const selectAddress = state => state.get('address')

const makeSelectAddress = () =>
  createSelector(selectAddress, address => address)

const makeSelectAddressIsLoading = () =>
  createSelector(selectAddress, address => address.get('loading'))

const makeSelectAddressIsEqual = () =>
  createSelector(selectAddress, address => address.get('addressIsEqual'))

const makeSelectAddressDelivery = () =>
  createSelector(selectAddress, address => address.get('delivery').toJS())

const makeSelectAddressInvoice = () =>
  createSelector(selectAddress, address => address.get('invoice').toJS())

const makeSelectAddressId = () =>
  createSelector(selectAddress, address => address.get('invoice'))

const makeSelectAddressType = type =>
  createSelector(selectAddress, address => address.get(type))

const makeSelectAddressCountry = () =>
  createSelector(selectAddress, address => address.get('country').toJS())

export {
  makeSelectAddress,
  makeSelectAddressIsEqual,
  makeSelectAddressId,
  makeSelectAddressCountry,
  makeSelectAddressDelivery,
  makeSelectAddressInvoice,
  makeSelectAddressIsLoading,
  makeSelectAddressType
}
