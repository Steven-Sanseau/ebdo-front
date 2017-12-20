/**
 *
 * Asynchronously loads the component for DeliveryStep
 *
 */

import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import('./index'),
  loading: () => null
})
