/**
 *
 * Asynchronously loads the component for CodeGiftStep
 *
 */

import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import('./index'),
  loading: () => null
})
