import { Record } from 'immutable'

const Subscription = new Record(
  {
    subscription_id: null,
    aboweb_subscription_id: null,
    aboweb_client_id: null,
    first_number_delivered: null,
    last_number_delivered: null,
    is_invoiced: null,
    is_suspended: null,
    is_resubscription: null,
    free_subscription: null,
    number_of_copy: null,
    status: null,
    order_number: null,
    begin_at: null,
    end_at: null,
    created_at: null
  },
  'subscription'
)

export default Subscription
