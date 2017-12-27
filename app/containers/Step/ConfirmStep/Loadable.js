/**
 *
 * Asynchronously loads the component for ConfirmStep
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
