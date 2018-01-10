/**
 *
 * Image
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

// import styled from 'styled-components';

const Image = props => {
  const { src, alt, width, height } = props
  return <img src={src} alt={alt} width={width} height={height} />
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Image
