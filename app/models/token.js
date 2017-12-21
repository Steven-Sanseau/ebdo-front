import { Record } from 'immutable'

const Token = new Record(
  {
    token_id: null,
    token_type: null,
    stripe_token_id: null,
    stripe_customer_id: null,
    stripe_card_id: null,
    slimpay_rum_id: null,
    slimpay_token_id: null,
    slimpay_rum_code: null
  },
  'token'
)

export default Token
