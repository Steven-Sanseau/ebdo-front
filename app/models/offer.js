import { Record } from 'immutable'

const Offer = new Record(
  {
    offer_id: null,
    aboweb_id: null,
    name: null,
    price_ttc: 0,
    monthly_price_ttc: 15,
    description: '',
    time_limited: false,
    duration: 0,
    shipping_cost: 0,
    is_gift: false,
    is_free: false,
    is_free_gift: false,
    country_shipping: 'FR',
    payment_method: 2
  },
  'offer'
)

export default Offer
