/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Coucou</h1>
        <Link to="/subscribe">Sub</Link>
      </div>
    );
  }
}
