import { Record } from 'immutable'

const Token = new Record(
  {
    token_id: null,
    token_type: null,
    token_stripe_id: null,
    stripe_custom_id: null,
    card_stripe_id: null,
    rum_slimpay: null
  },
  'token'
)

export default Token

