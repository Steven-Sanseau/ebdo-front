/**
*
* Link
*
*/

import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const LinkWrapper = styled.a`
  color: #fff;
  border-bottom: 1px solid #ffffff;
  text-decoration: none;

  &:hover {
    background: white;
    color: #5C2A53;
  }
`

const Link = props => {
  const { to, children } = props
  return (
    <LinkWrapper href={to}>
      {children}
    </LinkWrapper>
  );
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
};

export default Link;
