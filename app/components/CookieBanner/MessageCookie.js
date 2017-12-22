import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from 'components/Image'

import '!file-loader?name=[name].[ext]!images/cookie/cookie_bitten_0.png'
import '!file-loader?name=[name].[ext]!images/cookie/cookie_bitten_1.png'
import '!file-loader?name=[name].[ext]!images/cookie/cookie_bitten_2.png'
import '!file-loader?name=[name].[ext]!images/cookie/cookie_bitten_3.png'
import '!file-loader?name=[name].[ext]!images/cookie/cookie_bitten_4.png'
import '!file-loader?name=[name].[ext]!images/cookie/cookie_bitten_5.png'

const WrapperMessageCookie = styled.div`
  cursor: pointer;
  user-select: none;
`

export default class MessageCookie extends Component {
  state = {
    nbBitten: 0,
    imageCookie: 'cookie_bitten_0.png'
  }

  handleCookieClic = () => {
    const { nbBitten } = this.state
    this.setState({
      nbBitten: nbBitten + 1
    })
  }

  render() {
    return (
      <div>
        <WrapperMessageCookie onClick={this.handleCookieClic}>
          {this.state.nbBitten <= 5 && (
            <Image
              height={30}
              src={`cookie_bitten_${this.state.nbBitten}.png`}
            />
          )}
          Mangez-moi ! Mangez-moi !
        </WrapperMessageCookie>
      </div>
    )
  }
}
