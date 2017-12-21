import { Record } from 'immutable'

const Offer = new Record(
  {
    offer_id: null,
    aboweb_id: null,
    price_ht: 0,
    price_ttc: 0,
    monthly_price_ttc: 15,
    description: '',
    ref: null,
    time_limited: false,
    duration: 0,
    shipping_cost: 0,
    is_gift: false
  },
  'offer'
)

export default Offer
