import {
  NEXT_STEP,
  UPDATE_STEP,
  POST_CLIENT,
  POST_CLIENT_LOADED,
  POST_CLIENT_ERROR,
  SET_CLIENT_EMAIL,
  POST_ADRESS,
  POST_ADRESS_LOADED,
  POST_ADRESS_ERROR,
  SET_ADRESS,
  SET_ADRESS_EQUAL
} from './constants'

export function nextStep() {
  return {
    type: NEXT_STEP
  }
}

export function goToStep(step) {
  return {
    type: UPDATE_STEP,
    step
  }
}

export function postClient() {
  return {
    type: POST_CLIENT
  }
}

export function postClientLoaded(client) {
  return {
    type: POST_CLIENT_LOADED,
    client
  }
}

export function postClientError(error) {
  return {
    type: POST_CLIENT_ERROR,
    error
  }
}

export function setClientEmail(email) {
  return {
    type: SET_CLIENT_EMAIL,
    email
  }
}

// ADRESS
export function postAdress(typeOfAdress) {
  return {
    type: POST_ADRESS,
    typeOfAdress
  }
}

export function postAdressLoaded(typeOfAdress, adress) {
  return {
    type: POST_ADRESS_LOADED,
    payload: {
      typeOfAdress,
      adress
    }
  }
}

export function postAdressError(error) {
  return {
    type: POST_ADRESS_ERROR,
    error
  }
}

export function setAdress(typeOfAdress, adress) {
  return {
    type: SET_ADRESS,
    payload: {
      typeOfAdress,
      adress
    }
  }
}
export function setAdressEqual() {
  return {
    type: SET_ADRESS_EQUAL
  }
}
