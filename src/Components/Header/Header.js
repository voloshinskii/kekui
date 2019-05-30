import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * Header component.
 */

export default class Header extends Component {
  static propTypes = {
    /** children */
    children: PropTypes.any,
    /** Logo */
    logo: PropTypes.any,
    /** Default React className */
    className: PropTypes.string,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
  }

  render() {
    const { className, theme, logo, children, ...restProps } = this.props;
    return (
      <div className={ `header ${ className } ${ theme }` } { ...restProps }>
        <input type="checkbox" />
        <div className="paranja" />
        <div className="span-holder">
          <span></span>
          <span style={{ marginBottom: '-22px' }}></span>
          <span></span>
        </div>
        <span className="logo">
          { logo }
        </span>
        <ul className="header-in">
          { children }
        </ul>
      </div>
    );
  }
}
