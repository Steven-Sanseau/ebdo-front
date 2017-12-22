import { Record } from 'immutable'

const Address = new Record(
  {
    address_id: null,
    last_name: null,
    phone: null,
    first_name: null,
    address: null,
    city: null,
    postal_code: null,
    country: null,
    company: null,
    type_address: null
  },
  'address'
)

export default Address