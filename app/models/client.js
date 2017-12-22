import { Record } from 'immutable'

const Client = new Record(
  {
    client_id: null,
    email: null,
    aboweb_client_id: null
  },
  'client'
)

export default Client
