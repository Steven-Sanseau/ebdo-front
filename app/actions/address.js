import {
  POST_ADDRESS,
  POST_ADDRESS_LOADED,
  POST_ADDRESS_ERROR,
  SET_ADDRESS,
  SET_ADDRESS_EQUAL,
  SET_COUNTRY_ADDRESS,
  GET_ADDRESS,
  GET_ADDRESS_ERROR,
  GET_ADDRESS_LOADED
} from 'actions/constants'

export function postAddress(typeOfAddress, addressId, isOffer) {
  return {
    type: POST_ADDRESS,
    typeOfAddress,
    addressId,
    isOffer
  }
}

export function postAddressLoaded(typeOfAddress, address) {
  return {
    type: POST_ADDRESS_LOADED,
    payload: {
      typeOfAddress,
      address
    }
  }
}

export function postAddressError(error, typeOfAddress) {
  return {
    type: POST_ADDRESS_ERROR,
    error,
    payload: {
      typeOfAddress
    }
  }
}

export function getAddress(typeOfAddress, requestAction) {
  return {
    type: GET_ADDRESS,
    typeOfAddress,
    requestAction
  }
}

export function getAddressLoaded(typeOfAddress, address) {
  return {
    type: GET_ADDRESS_LOADED,
    payload: {
      typeOfAddress,
      address
    }
  }
}

export function getAddressError(error, typeOfAddress) {
  return {
    type: GET_ADDRESS_ERROR,
    error,
    payload: {
      typeOfAddress
    }
  }
}

export function setAddress(typeOfAddress, address) {
  return {
    type: SET_ADDRESS,
    payload: {
      typeOfAddress,
      address
    }
  }
}

export function setCountryAddress(country) {
  return {
    type: SET_COUNTRY_ADDRESS,
    payload: {
      country
    }
  }
}

export function setAddressEqual() {
  return {
    type: SET_ADDRESS_EQUAL
  }
}
