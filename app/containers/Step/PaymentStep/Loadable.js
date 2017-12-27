/**
 *
 * Asynchronously loads the component for PaymentStep
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
