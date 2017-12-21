import { Record } from 'immutable'

const Checkout = new Record(
  {
    checkout_id: null,
    client_id: null,
    address_delivery_id: null,
    address_invoice_id: null,
    token_id: null,
    offer_id: null,
    payment_method: 1,
    status: 'to_finalize'
  },
  'checkout'
)

export default Checkout
