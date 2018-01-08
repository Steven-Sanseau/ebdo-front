import { createSelector } from 'reselect'

const selectAddress = state => state.get('address')

const makeSelectAddress = () =>
  createSelector(selectAddress, address => address)

const makeSelectAddressIsLoading = () =>
  createSelector(selectAddress, address => address.get('loading'))

const makeSelectAddressIsEqual = () =>
  createSelector(selectAddress, address => address.get('addressIsEqual'))

const makeSelectAddressIsError = () =>
  createSelector(selectAddress, address => address.get('error'))

const makeSelectAddressError = () =>
  createSelector(selectAddress, address => address.get('errorMessage'))

const makeSelectAddressDelivery = () =>
  createSelector(selectAddress, address => address.get('delivery').toJS())

const makeSelectAddressInvoice = () =>
  createSelector(selectAddress, address => address.get('invoice').toJS())

const makeSelectAddressId = () =>
  createSelector(selectAddress, address => address.get('invoice'))

const makeSelectAddressType = type =>
  createSelector(selectAddress, address => address.get(type))

const makeSelectIsEditableAddress = type =>
  createSelector(selectAddress, address => address.get('isEditableAddress'))

const makeSelectAddressCountry = () =>
  createSelector(selectAddress, address => address.get('country').toJS())

export {
  makeSelectAddress,
  makeSelectAddressIsError,
  makeSelectAddressError,
  makeSelectIsEditableAddress,
  makeSelectAddressIsEqual,
  makeSelectAddressId,
  makeSelectAddressCountry,
  makeSelectAddressDelivery,
  makeSelectAddressInvoice,
  makeSelectAddressIsLoading,
  makeSelectAddressType
}
