import React from 'react'
import PropTypes from 'prop-types'

import injectSaga from 'utils/injectSaga'
import { connect } from 'react-redux'
import { compose } from 'redux'

import sagaOffer from 'saga/offer'
import sagaCheckout from 'saga/checkout'
import sagaToken from 'saga/token'
import sagaAddress from 'saga/address'
import sagaClient from 'saga/client'

class StoreSaga extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return this.props.children
  }
}

StoreSaga.propTypes = {
  children: PropTypes.element.isRequired
}

// const mapStateToProps = {}
//
// function mapDispatchToProps() {
//   return {}
// }

// const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withSagaOffer = injectSaga({ key: 'offer', saga: sagaOffer })
const withSagaToken = injectSaga({ key: 'token', saga: sagaToken })
const withSagaCheckout = injectSaga({ key: 'checklout', saga: sagaCheckout })
const withSagaClient = injectSaga({ key: 'client', saga: sagaClient })
const withSagaAddress = injectSaga({ key: 'address', saga: sagaAddress })

export default compose(
  withSagaOffer,
  withSagaToken,
  withSagaCheckout,
  withSagaAddress,
  withSagaClient
)(StoreSaga)
