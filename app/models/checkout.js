import { Record } from 'immutable'

const Checkout = new Record(
  {
    payment_method: 2,
    cgv_accepted: false,
    status: 'to_finalize'
  },
  'checkout'
)

export default Checkout
