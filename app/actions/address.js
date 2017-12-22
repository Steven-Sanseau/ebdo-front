import {
  POST_ADRESS,
  POST_ADRESS_LOADED,
  POST_ADRESS_ERROR,
  SET_ADRESS,
  SET_ADRESS_EQUAL,
  SET_COUNTRY_ADRESS
} from 'actions/constants'

export function postAddress(typeOfAddress) {
  return {
    type: POST_ADRESS,
    typeOfAddress
  }
}

export function postAddressLoaded(typeOfAddress, address) {
  return {
    type: POST_ADRESS_LOADED,
    payload: {
      typeOfAddress,
      address
    }
  }
}

export function postAddressError(error, typeOfAddress) {
  return {
    type: POST_ADRESS_ERROR,
    error,
    payload: {
      typeOfAddress
    }
  }
}

export function setAddress(typeOfAddress, address) {
  return {
    type: SET_ADRESS,
    payload: {
      typeOfAddress,
      address
    }
  }
}

export function setCountryAddress(country) {
  return {
    type: SET_COUNTRY_ADRESS,
    payload: {
      country
    }
  }
}

export function setAddressEqual() {
  return {
    type: SET_ADRESS_EQUAL
  }
}
