import { Record } from 'immutable'

const Token = new Record({
  token_id: null,
  token_stripe: null,
  stripe_id: null,
  rum_slimpay: null,
  iban: null
})

export default Token
