import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Form component.
 */

export default class Form extends Component {
  static propTypes = {
    /** Default React className */
    className: PropTypes.string,
    /** form children */
    children: PropTypes.any,
    /** Theme style */
    theme: PropTypes.oneOf(['dark', 'light']),
    /** Style */
    style: PropTypes.oneOf(['default-style']),
  }
  static defaultProps = {
    className: null,
    theme: 'dark',
    style: 'default-style'
  }

  render() {
    return (
      <div className={`form ${this.props.style} ${this.props.className}`}>
          {this.props.children}
      </div>
    );
  }
}
