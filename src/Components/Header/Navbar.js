import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * Navbar component.
 */

export default class Navbar extends Component {
  static propTypes = {
    /** Position */
    position: PropTypes.oneOf(['left', 'right']),
    /** Default React className */
    className: PropTypes.string,
  }
  static defaultProps = {
    position: 'left',
    className: null,
  }

  render() {
    const { className, position, children, ...restProps } = this.props;
    return (
      <ul className={ `navbar ${ className } ${ position }` } { ...restProps }>
          { children }
      </ul>
    );
  }
}
