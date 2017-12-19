import { Record } from 'immutable'

const Token = new Record({
  adress_id: null,
  client_id: 1,
  civility: 'M',
  last_name: null,
  first_name: null,
  adress: null,
  city: null,
  postal_code: null,
  country: null,
  company: null,
  type_adress: null
})

export default Token
