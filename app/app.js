// Needed for redux-saga es6 generator support
import 'babel-polyfill'

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { StripeProvider } from 'react-stripe-elements'
import StoreSaga from './stores'
import FontFaceObserver from 'fontfaceobserver'
import createHistory from 'history/createBrowserHistory'
import 'sanitize.css/sanitize.css'

// Import root app
import App from 'containers/App'
import ScrollMemory from 'react-router-scroll-memory'

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-webpack-loader-syntax */

import '!file-loader?name=[name].[ext]!./images/favicon.ico'
import '!file-loader?name=[name].[ext]!./assets/fonts/FoundersGroteskWeb-Bold.woff'
import '!file-loader?name=[name].[ext]!./assets/fonts/FoundersGroteskWeb-Medium.woff'
import '!file-loader?name=[name].[ext]!./assets/loaderio-9f09f6f63a76c58a1c2976d678e16529.txt'

import configureStore from './configureStore'

// Import CSS reset and Global Styles
import './global-styles'

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('FG-R', {})

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(
  () => {
    document.body.classList.add('fontLoaded')
  },
  () => {
    document.body.classList.remove('fontLoaded')
  }
)

// Create redux store with history
const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <StoreSaga store={store}>
        <StripeProvider apiKey={process.env.EBDO_STRIPE_KEY_API}>
          <ConnectedRouter history={history}>
            <div>
              <ScrollMemory />
              <App />
            </div>
          </ConnectedRouter>
        </StripeProvider>
      </StoreSaga>
    </Provider>,
    MOUNT_NODE
  )
}

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render()
  })
}

render()
