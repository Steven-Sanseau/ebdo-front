import { Record } from 'immutable'

const Checkout = new Record(
  {
    checkout_id: null,
    checkout_step: null,
    test: null,
    client_id: null,
    cookie_id: null,
    address_delivery_id: null,
    address_invoice_id: null,
    token_id: null,
    offer_id: null,
    payment_method: 1,
    status: null
  },
  'checkout'
)

export default Checkout
